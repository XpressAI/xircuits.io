// // A JavaScript function that returns an object.
// // `context` is provided by Docusaurus. Example: siteConfig can be accessed from context.
// // `opts` is the user-defined options.
async function vectoIngestDocsPlugin(context, opts) {
  return {
    // A compulsory field used as the namespace for directories to cache
    // the intermediate data for each plugin.
    // If you're writing your own local plugin, you will want it to
    // be unique in order not to potentially conflict with imported plugins.
    // A good way will be to add your own project name within.
    name: 'vecto-ingest-doc',
    async postBuild({ routesPaths = [],
      outDir,
      baseUrl,
      siteConfig: { trailingSlash, themeConfig },
      plugins }) {
      // After docusaurus <build> finish.
      console.info("Gathering documents");

      const fs = require('fs');
      const util = require('util');
      const path = require('path');
      // const marked = require('marked');
      // const jsdom = require("jsdom");
      // const { JSDOM } = jsdom;
      const cheerio = require("cheerio");
      const FormData = require('form-data');
      require('isomorphic-fetch');
      const readFileAsync = util.promisify(fs.readFile);
      const { vecto } = themeConfig;
      const defaultVectoConfig = {
        token : '',
        vecto_ingest_url : 'http://127.0.0.1:8080/api/v0/index',
        vector_space_id : 3,
        allowDocSearch : true,
        allowBlogSearch : true }
      // We insert whitespace after text from any of these tags
      const BLOCK_TAGS = [
        "address",
        "article",
        "aside",
        "blockquote",
        "canvas",
        "dd",
        "div",
        "dl",
        "dt",
        "fieldset",
        "figcaption",
        "figure",
        "footer",
        "form",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "header",
        "hr",
        "li",
        "main",
        "nav",
        "noscript",
        "ol",
        "p",
        "pre",
        "section",
        "table",
        "tfoot",
        "ul",
        "video",
        // Not strictly block tags, but still.
        "td",
        "th",
      ];

      function _getText($, el) {
        if (Array.isArray(el)) {
          let content = "";
          el.forEach((el) => {
            content += _getText($, el);
            if (
              el.type === "tag" &&
              (BLOCK_TAGS.includes(el.name) ||
                // for lines in code blocks
                (el.name === "span" && $(el).attr("class") === "token-line"))
            ) {
              content += " ";
            }
          });
          return content;
        } else if (el.type === "text") {
          return el.data.replace(/\n/g, " ");
        } else if (el.type === "tag") {
          return _getText($, $(el).contents().get());
        } else if (["style", "script", "comment"].includes(el.type)) {
          return "";
        } else {
          console.warn(
            `Received an unknown element while extracting content from HTML files. This should never happen. Please open an issue at https://github.com/cmfcmf/docusaurus-search-local/issues if you see this message (debug: got type ${el.type}).`
          );
          return "";
        }
      }

      function getText($, el) {
        return _getText($, el).replace(/\s+/g, " ").trim();
      }

      function html2text(
        html,
        type,
        url
      ) {
        const $ = cheerio.load(html);
        // Remove copy buttons from code boxes
        $("div[class^=codeBlockContent_] button").remove();

        if (type === "docs") {
          // Remove version badges
          $("span")
            .filter(
              (_, element) =>
                $(element).hasClass("badge") &&
                $(element).text().startsWith("Version:")
            )
            .remove();
        }

        if (type === "docs" || type === "blog") {
          const HEADINGS = "h1, h2, h3";
          const pageTitle = $("article header h1").first().text();

          const sections = new Array;
          // Parse tags, and add them to the first section.
          const tags = $("article footer ul[class^=tags_] li")
            .map((_, element) => $(element).text())
            .toArray();

          // Make sure to also adjust the highlighting functionality in the client
          // if you change the top element here.
          $("article")
            .find(HEADINGS)
            .each((i, heading) => {
              const title = $(heading)
                .contents()
                // Remove elements that are marked as aria-hidden and the hash-link.
                // This is mainly done to remove anchors like these:
                //
                // <a aria-hidden="true" tabindex="-1" class="hash-link" href="#first-subheader" title="Direct link to heading">#</a>
                // <a aria-hidden="true" tabindex="-1" class="anchor enhancedAnchor_prK2" id="first-header"></a>
                // <a class="hash-link" href="#first-header" title="Direct link to heading">#</a>
                .not("a[aria-hidden=true], a.hash-link")
                .text();
              const hash = $(heading).find("a.hash-link").attr("href") || "";

              let $sectionElements;
              if ($(heading).parents(".markdown").length === 0) {
                // $(heading) is the page title

                const $firstElement = $("article")
                  .children() // div.markdown, header
                  .not("header") // div.markdown
                  .children() // h1, p, p, h2, ...
                  .first(); // h1 || p
                if ($firstElement.filter(HEADINGS).length) {
                  // The first element is a header. This section is empty.
                  sections.push({
                    title,
                    hash,
                    content: "",
                    tags: i === 0 ? tags : [],
                  });
                  return;
                }
                $sectionElements = $firstElement
                  .nextUntil(`${HEADINGS}, header`)
                  .addBack();
              } else {
                // If the users uses a h1 tag as part of the markdown, Docusaurus will generate a header
                // around it for some reason, which we need to ignore.
                //
                // <header>
                //   <h1 class="h1Heading_27L5">FIRST HEADER</h1>
                // </header>

                const root = $(heading).parent("header").length
                  ? $(heading).parent()
                  : $(heading);
                $sectionElements = root.nextUntil(`${HEADINGS}, header`);
              }
              const content = getText($, $sectionElements.get());

              sections.push({
                title,
                hash,
                content,
                tags: i === 0 ? tags : [],
              });
            });

          const docSidebarParentCategories =
            type === "docs"
              ? $(".theme-doc-sidebar-container .menu__link--active")
                .map((_, element) => $(element).text())
                .get()
                .slice(0, -1)
              : undefined;

          return { pageTitle, sections, docSidebarParentCategories };
        } else if (type === "page") {
          $("a[aria-hidden=true]").remove();
          let $pageTitle = $("h1").first();
          if (!$pageTitle.length) {
            $pageTitle = $("title");
          }

          const pageTitle = $pageTitle.text();
          // Make sure to also adjust the highlighting functionality in the client
          // if you change the top element here.
          const $main = $("main").first();
          if (!$main.length) {
            console.warn(
              "Page has no <main>, therefore no content was indexed for this page.",
              { url }
            );
          }
          return {
            pageTitle,
            sections: [
              {
                title: pageTitle,
                hash: "",
                content: $main.length ? getText($, $main.get()) : "",
                tags: [],
              },
            ],
          };
        } else {
          throw new Error(`Cannot index files of unknown type ${type}!`);
        }
      }

      function getDocusaurusTag(html) {
        const $ = cheerio.load(html);
        const tag = $('meta[name="docusaurus_tag"]').attr("content");
        if (!tag || tag.length === 0) {
          throw new Error(
            "The `docusaurus_tag` meta tag could not be found. Please make sure that your page is wrapped in the `<Layout>` component (from `@theme/Layout`). If it is, then this is a bug, please report it."
          );
        }
        return tag;
      }

      function buildPluginMap(name) {
        return new Map(
          plugins
            .filter((plugin) => plugin.name === name)
            .map((plugin) => [plugin.options.id, plugin])
        );
      }

      function urlMatchesPrefix(url, prefix) {
        if (prefix.startsWith("/")) {
          throw new Error(`prefix must not start with a /. This is a bug.`);
        }
        if (prefix.endsWith("/")) {
          throw new Error(`prefix must not end with a /. This is a bug.`);
        }
        return prefix === "" || url === prefix || url.startsWith(`${prefix}/`);
      }

      function trimLeadingSlash(path) {
        if (!path || !path.startsWith("/")) {
          return path;
        }
        return path.slice(1);
      }

      function trimTrailingSlash(path) {
        if (!path || !path.endsWith("/")) {
          return path;
        }
        return path.slice(0, -1);
      }

      const docsPlugins = buildPluginMap(
        "docusaurus-plugin-content-docs"
      );
      const blogPlugins = buildPluginMap(
        "docusaurus-plugin-content-blog"
      );
      const pagesPlugins = buildPluginMap(
        "docusaurus-plugin-content-pages"
      );
      const allowDocSearch = vecto.allowDocSearch ?? defaultVectoConfig.allowDocSearch;
      const allowBlogSearch = vecto.allowBlogSearch ?? defaultVectoConfig.allowBlogSearch;
      const data = routesPaths
        .flatMap((url) => {
          // baseUrl includes the language prefix, thus `route` will be language-agnostic.
          const route = url.substring(baseUrl.length);
          if (!url.startsWith(baseUrl)) {
            throw new Error(
              `The route must start with the baseUrl ${baseUrl}, but was ${route}. This is a bug, please report it.`
            );
          }
          if (route === "404.html") {
            // Do not index error page.
            return [];
          }
          if (allowDocSearch) {
            for (const docsPlugin of docsPlugins.values()) {
              const docsBasePath = trimTrailingSlash(
                docsPlugin.options.routeBasePath
              );
              const docsTagsPath = docsPlugin.options.tagsBasePath;

              if (urlMatchesPrefix(route, docsBasePath)) {
                if (
                  urlMatchesPrefix(
                    route,
                    trimLeadingSlash(`${docsBasePath}/${docsTagsPath}`)
                  ) ||
                  urlMatchesPrefix(
                    route,
                    trimLeadingSlash(`${docsBasePath}/__docusaurus`)
                  )
                ) {
                  // Do not index tags filter pages and pages generated by the debug plugin
                  return [];
                }
                return {
                  route,
                  url,
                  type: "docs",
                };
              }
            }
          }
          if (allowBlogSearch) {
            for (const blogPlugin of blogPlugins.values()) {
              const blogBasePath = trimTrailingSlash(
                blogPlugin.options.routeBasePath
              );
              const blogTagsPath = blogPlugin.options.tagsBasePath;

              if (urlMatchesPrefix(route, blogBasePath)) {
                if (
                  route === blogBasePath ||
                  urlMatchesPrefix(
                    route,
                    trimLeadingSlash(`${blogBasePath}/${blogTagsPath}`)
                  ) ||
                  urlMatchesPrefix(
                    route,
                    trimLeadingSlash(`${blogBasePath}/__docusaurus`)
                  )
                ) {
                  // Do not index list of blog posts, tags filter pages, and pages generated by the debug plugin
                  return [];
                }
                return {
                  route,
                  url,
                  type: "blog",
                };
              }
            }
          }
          // for (const pagesPlugin of pagesPlugins.values()) {
          //   const pagesBasePath = trimTrailingSlash(
          //     pagesPlugin.options.routeBasePath
          //   );

          //   if (urlMatchesPrefix(route, pagesBasePath)) {
          //     if (
          //       urlMatchesPrefix(
          //         route,
          //         trimLeadingSlash(`${pagesBasePath}/__docusaurus`)
          //       )
          //     ) {
          //       // Do not index pages generated by the debug plugin
          //       return [];
          //     }
          //     return {
          //       route,
          //       url,
          //       type: "page",
          //     };
          //   }
          // }
          return [];
        })
        .map(({ route, url, type }) => {
          const file =
            trailingSlash === false
              ? path.join(outDir, `${route === "" ? "index" : route}.html`)
              : path.join(outDir, route, "index.html");
          return {
            file,
            url,
            type,
          };
        });

      console.info("Parsing documents");
      // Give every index entry a unique id so that the index does not need to store long URLs.
      let nextDocId = 1;
      const documents = (
        await Promise.all(
          data.map(async ({ file, url, type }) => {
            console.debug(`Parsing ${type} file ${file}`, { url });
            const html = await readFileAsync(file, { encoding: "utf8" });
            const { pageTitle, sections, docSidebarParentCategories } =
              html2text(html, type, url);
            const docusaurusTag = getDocusaurusTag(html);

            return sections.map((section) => ({
              id: nextDocId++,
              pageTitle,
              pageRoute: url,
              sectionRoute: url + section.hash,
              sectionTitle: section.title,
              sectionContent: section.content,
              sectionTags: section.tags,
              docusaurusTag,
              docSidebarParentCategories,
              type,
            }));
          })
        )
      ).flat();

      const documentsByDocusaurusTag = documents.reduce((acc, doc) => {
        acc[doc.docusaurusTag] = acc[doc.docusaurusTag] ?? [];
        acc[doc.docusaurusTag]?.push(doc);
        return acc;
      }, {});
      
      await Promise.all(documents.map(async function (doc) {
        let content = doc.sectionTitle +" "+ doc.sectionContent
        let metadata = { URL: doc.sectionRoute,content:doc.sectionContent,page_title:doc.pageTitle,title:doc.sectionTitle}
        content = (content.replace(/[^a-zA-Z ]/g, " ")).replace(/\s{2,}/g, " ")

        let TOKEN = vecto.token ?? defaultVectoConfig.token;
        let vecto_ingest_url = vecto.vecto_ingest_url ?? defaultVectoConfig.vecto_ingest_url;
        let vector_space_id = vecto.vector_space_id ?? defaultVectoConfig.vector_space_id;
        let modality = 'TEXT';
        let data = new FormData();
        data.append('vector_space_id', vector_space_id)
        data.append('modality', modality)
        data.append('data', JSON.stringify(metadata))
        data.append('input', Buffer.from(content), "hi")
        
        
        return fetch(vecto_ingest_url, {
          method: 'POST',
          body: data,
          headers: {
            'Authorization': 'Bearer ' + TOKEN
          }
        })
        // .then(function(result) {console.log(result)}).catch(console.log)
      }))

      // console.log(documents);
      // console.info(
      //   `${
      //     Object.keys(documentsByDocusaurusTag).length
      //   } indexes will be created.`
      // );
    }
  }
}
module.exports = vectoIngestDocsPlugin;