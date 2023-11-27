# Xircuits.io

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

```
$ GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

### Displaying External Markdowns

You can fetch and display specific sections of external markdown files with customizable error placeholders. This is primarily used for fetching component libraries and project templates readmes. 

Here's a sample of how you can do it. 
```
import ExternalMarkdown from '@site/src/scripts/ExternalMarkdown';

# Example Markdown

<ExternalMarkdown
  url="https://raw.githubusercontent.com/XpressAI/xircuits/master/xai_components/readme.md"
  header="Internal Library"
  placeholder="Content is unavailable or the specified section is not found."
/>
```

### Fetching External Markdowns

Alternatively, you can also include external markdowns with specific headers and save them as mdx. To do this:
1. Specify the markdown that you wish to fetch using this template syntax:
```javascript
{{your-markdown-url.md|your-header-title}}
```
If a header is not supplied, it will fetch the whole markdown content.

2. Rename your markdown files with templates as `.mdtemplate`.
3. Run the script! 
```bash
node src/scripts/MarkdownContentFetcher.js
```
