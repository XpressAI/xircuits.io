import React, { useEffect, useState, useReducer, useRef } from 'react';
import clsx from 'clsx';

import algoliaSearchHelper from 'algoliasearch-helper';

import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import {
    HtmlClassNameProvider,
    usePluralForm,
    isRegexpStringMatch,
    useEvent,
    // @ts-ignore
} from '@docusaurus/theme-common';
import {
    useTitleFormatter,
    useSearchPage,
    // @ts-ignore
} from '@docusaurus/theme-common/internal';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
//@ts-ignore
import { useAllDocsData } from '@docusaurus/plugin-content-docs/client';
import Translate, { translate } from '@docusaurus/Translate';
import Layout from '@theme/Layout';

import styles from './styles.module.css';
import { ThemeConfig } from '@docusaurus/preset-classic';
// Very simple pluralization: probably good enough for now


// function postSearchQuery(searchStr) {
//     // window.open("http://localhost:3000/vecto_search/","_self");
//     let TOKEN = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ1cG4iOiJiYXJfdG9rZW4iLCJpc3MiOiJodHRwczovL3ZlY3RvLmFpIiwiZ3JvdXBzIjpbInVzZXIiXSwiZXhwIjoxNjYxNTY2NDQ1LCJhdWQiOlsiMyJdLCJpYXQiOjE2NTg5NzQ0NDUsImp0aSI6ImQ5YWIzMmM4LWI4ZjgtNGI1Ni04YzA0LTUwZWVkNThiMzljMSJ9.SXTnRdLD65_5PcMIY_TZ3F4AwdaXwZOV4uz6qnVQerVrLZifKM3awoVDgq9Y_ES0PXQQJrRleqUpk9W0tpKlI_FU-M9_BPwOa2bJmN5rAB68OBk4BtOHDn3Lhv5l4Z_ef04CxLfk3Q2OuXE0ELyrmdKA6VQw66h5S3whFitQc1i_t0m6WQE63H2ZAG4kRk2WWUIG3VHBd2m2kihc_5UBNzYwqrz8l-1j7BEUbkz3dz242Zhhf8YL3881YsMlI-f0lKM93PJkyH-1EZfnx7okE2wnfKnu1BNYU5llNN2-2T8RH_xj3lr1SC-NryqumTV7G6-ZwhnSFfUjvWYX1G-YBQ";
//     let vecto_base_url = "http://localhost:8080/api/v0";
//     let vector_space_id = 3;
//     let modality = 'TEXT';
//     let top_k = 10;
//     let data = new FormData();
//     data.append('vector_space_id', vector_space_id)
//     data.append('modality', modality)
//     data.append('top_k', top_k)
//     data.append('query', new File([new Blob([searchStr])], "hi"))
//     // data.append('ids', 0)
    
//     fetch("http://localhost:8080/api/v0/lookup", {
//         method: 'POST',
//         body : data,
//         headers: {
//             'Authorization': 'Bearer ' + TOKEN
//         }
//     })
//         .then((res) => res.json())
//         .then(
//             (result) => {
//                 alert(result)
//             return result
//             },

//             // Note: it's important to handle errors here
//             // instead of a catch() block so that we don't swallow
//             // exceptions from actual bugs in components.
//             (error) => {
//                 alert(error)
//             }
//     );
    
// }

function getQueryString() {
    var GET = {};
    var queryString = window.location.search.replace(/^\?/, '');
    queryString.split(/\&/).forEach(function (keyValuePair) {
        var paramName = keyValuePair.replace(/=.*$/, ""); // some decoding is probably necessary
        var paramValue = keyValuePair.replace(/^[^=]*\=/, ""); // some decoding is probably necessary
        GET[paramName] = paramValue;
    });
    return GET;
}

function useDocumentsFoundPlural() {
    const { selectMessage } = usePluralForm();
    return (count: number) =>
        selectMessage(
            count,
            translate(
                {
                    id: 'theme.SearchPage.documentsFound.plurals',
                    description:
                        'Pluralized label for "{count} documents found". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',
                    message: 'One document found|{count} documents found',
                },
                { count },
            ),
        );
}

function useDocsSearchVersionsHelpers() {
    const allDocsData = useAllDocsData();

    // State of the version select menus / algolia facet filters
    // docsPluginId -> versionName map
    const [searchVersions, setSearchVersions] = useState<{
        [pluginId: string]: string;
    }>(() =>
        Object.entries(allDocsData).reduce(
            (acc, [pluginId, pluginData]) => ({
                ...acc,
                //@ts-ignore
                [pluginId]: pluginData.versions[0]!.name,
            }),
            {},
        ),
    );

    // Set the value of a single select menu
    const setSearchVersion = (pluginId: string, searchVersion: string) =>
        setSearchVersions((s) => ({ ...s, [pluginId]: searchVersion }));

    const versioningEnabled = Object.values(allDocsData).some(
        //@ts-ignore
        (docsData) => docsData.versions.length > 1,
    );

    return {
        allDocsData,
        versioningEnabled,
        searchVersions,
        setSearchVersion,
    };
}

// We want to display one select per versioned docs plugin instance
function SearchVersionSelectList({
    docsSearchVersionsHelpers,
}: {
    docsSearchVersionsHelpers: ReturnType<typeof useDocsSearchVersionsHelpers>;
}) {
    const versionedPluginEntries = Object.entries(
        docsSearchVersionsHelpers.allDocsData,
    )
        // Do not show a version select for unversioned docs plugin instances
        //@ts-ignore
        .filter(([, docsData]) => docsData.versions.length > 1);

    return (
        <div
            className={clsx(
                'col',
                'col--3',
                'padding-left--none',
                styles.searchVersionColumn,
            )}>
            {versionedPluginEntries.map(([pluginId, docsData]) => {
                const labelPrefix =
                    versionedPluginEntries.length > 1 ? `${pluginId}: ` : '';
                return (
                    <select
                        key={pluginId}
                        onChange={(e) =>
                            docsSearchVersionsHelpers.setSearchVersion(
                                pluginId,
                                e.target.value,
                            )
                        }
                        defaultValue={docsSearchVersionsHelpers.searchVersions[pluginId]}
                        className={styles.searchVersionInput}>
                        {//@ts-ignore
                            docsData.versions.map((version, i) => (
                                <option
                                    key={i}
                                    label={`${labelPrefix}${version.label}`}
                                    value={version.name}
                                />
                            ))}
                    </select>
                );
            })}
        </div>
    );
}

export type VectoSearchConfig = {
    token: string,
    vecto_base_url: string,
    vector_space_id: number,
    top_k: number
}

type ResultDispatcherState = {
    items: {
        title: string;
        url: string;
        summary: string;
        breadcrumbs: string[];
    }[];
    query: string | null;
    totalResults: number | null;
    totalPages: number | null;
    lastPage: number | null;
    hasMore: boolean | null;
    loading: boolean | null;
};

type ResultDispatcherStateVecto = {
    results: {
      data: string;
      url: string;
      summary: string;
      breadcrumbs: string[];
    }[];
    query: string | null;
    totalResults: number | null;
    totalPages: number | null;
    lastPage: number | null;
    hasMore: boolean | null;
    loading: boolean | null;
  };

type ResultDispatcher =
    | { type: 'reset'; value?: undefined }
    | { type: 'loading'; value?: undefined }
    | { type: 'update'; value: ResultDispatcherState }
    | { type: 'advance'; value?: undefined };

export default function vectoSearchPage() {
    const {
        siteConfig: { themeConfig },
        i18n: { currentLocale },
    } = useDocusaurusContext();
    //   console.log(themeConfig)
    const { vecto } = themeConfig as ThemeConfig;
    const documentsFoundPlural = useDocumentsFoundPlural();
    const docsSearchVersionsHelpers = useDocsSearchVersionsHelpers();
    const { searchQuery, setSearchQuery } = useSearchPage();
    const initialSearchResultState: ResultDispatcherState = {
        items: [],
        query: null,
        totalResults: null,
        totalPages: null,
        lastPage: null,
        hasMore: null,
        loading: null,
    };
    const defaultVectoConfig: VectoSearchConfig = {
        token : '',
        vecto_base_url : 'http://localhost:8080/api/v0',
        vector_space_id : 3,
        top_k : 10, }

    const [searchResultVecto, setSearchResultVectoDispatcher] = useState<any>([{}]);
    const notInitialRender = useRef(false);


    const [searchResultState, searchResultStateDispatcher] = useReducer(
        (prevState: ResultDispatcherState, data: ResultDispatcher) => {
            switch (data.type) {
                case 'reset': {
                    return initialSearchResultState;
                }
                case 'loading': {
                    return { ...prevState, loading: true };
                }
                case 'update': {
                    if (searchQuery !== data.value.query) {
                        return prevState;
                    }

                    return {
                        ...data.value,
                        items:
                            data.value.lastPage === 0
                                ? data.value.items
                                : prevState.items.concat(data.value.items),
                    };
                }
                case 'advance': {
                    const hasMore = prevState.totalPages! > prevState.lastPage! + 1;

                    return {
                        ...prevState,
                        lastPage: hasMore ? prevState.lastPage! + 1 : prevState.lastPage,
                        hasMore,
                    };
                }
                default:
                    return prevState;
            }
        },
        initialSearchResultState,
    );


    function postSearchQuery(searchStr) {
        let TOKEN = vecto.token ?? defaultVectoConfig.token;
        let vecto_base_url = vecto.vecto_base_url ?? defaultVectoConfig.vecto_base_url;
        let vector_space_id = vecto.vector_space_id ?? defaultVectoConfig.vector_space_id;
        let modality = 'TEXT';
        let top_k = vecto.top_k ?? defaultVectoConfig.top_k;
        let data = new FormData();
        // @ts-ignore
        data.append('vector_space_id', vector_space_id)
        data.append('modality', modality)
        // @ts-ignore
        data.append('top_k', top_k)
        data.append('query', new File([new Blob([searchStr])], "hi"))
        // data.append('ids', 0)
        
        fetch(vecto_base_url, {
            method: 'POST',
            body : data,
            headers: {
                'Authorization': 'Bearer ' + TOKEN
            }
        })
            .then((res) => res.json())
            .then(
                (result) => {
                    console.log(result)
                    result.results =result.results.map((res)=>{
                        res.data = JSON.parse(res.data)
                        return res
                    })
                    setSearchResultVectoDispatcher(result);
                },
    
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    alert(error)
                }
        );
        
    }
    function onSubmit(e) {
        if (e.key === 'Enter') {
            if (searchQuery == "") {
                setSearchResultVectoDispatcher([]);
            } else {
                postSearchQuery(searchQuery);
            }
           
            if (searchResultVecto.results != undefined && searchResultVecto != []) {
                // console.log("hi")
                // console.log(searchResultVecto.results)
                // searchResultVecto.results.map((r)=>{
                //     console.log(r)
                // })
            }
        }
    }

    const [loaderRef, setLoaderRef] = useState<HTMLDivElement | null>(null);
    const getTitle = () =>
        searchQuery
            ? translate(
                {
                    id: 'theme.SearchPage.existingResultsTitle',
                    message: 'Search results for "{query}"',
                    description: 'The search page title for non-empty query',
                },
                {
                    query: searchQuery,
                },
            )
            : translate({
                id: 'theme.SearchPage.emptyResultsTitle',
                message: 'Search the documentation',
                description: 'The search page title for empty query',
            });

    useEffect(() => {
        let queryStr: any = getQueryString();
        postSearchQuery(queryStr.q)
    }, []);
            // useEffect(() => {
    //     // if (notInitialRender.current) {
	// 	    postSearchQuery("")
    //     // } else {
    //     //     // Clear undo history when first time rendering
    //     //     notInitialRender.current = true;
    //     // }
    //     // setSearchResultVectoDispatcher(postSearchQueryResult)
	// }, [])
            
    return (
        <Layout>
            <Head>
                <title>{useTitleFormatter(getTitle())}</title>
                {/*
         We should not index search pages
          See https://github.com/facebook/docusaurus/pull/3233
        */}
                <meta property="robots" content="noindex, follow" />
            </Head>

            <div className="container margin-vert--lg">
                <h1>{getTitle()}</h1>

                <form className="row" onSubmit={(e) => e.preventDefault()}>
                    <div
                        className={clsx('col', styles.searchQueryColumn, {
                            'col--9': docsSearchVersionsHelpers.versioningEnabled,
                            'col--12': !docsSearchVersionsHelpers.versioningEnabled,
                        })}>
                        <input
                            type="search"
                            name="q"
                            className={styles.searchQueryInput}
                            placeholder={translate({
                                id: 'theme.SearchPage.inputPlaceholder',
                                message: 'Type your search here',
                                description: 'The placeholder for search page input',
                            })}
                            aria-label={translate({
                                id: 'theme.SearchPage.inputLabel',
                                message: 'Search',
                                description: 'The ARIA label for search page input',
                            })}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onKeyDown={onSubmit}
                            value={searchQuery}
                            autoComplete="off"
                            autoFocus
                        />
                    </div>

                    {docsSearchVersionsHelpers.versioningEnabled && (
                        <SearchVersionSelectList
                            docsSearchVersionsHelpers={docsSearchVersionsHelpers}
                        />
                    )}
                </form>

                <div className="row">
                    <div className={clsx('col', 'col--8', styles.searchResultsColumn)}>
                        {!!searchResultState.totalResults &&
                            documentsFoundPlural(searchResultState.totalResults)}
                    </div>

                    <div
                        className={clsx(
                            'col',
                            'col--4',
                            'text--right',
                            styles.searchLogoColumn,
                        )}>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={`https://vecto.ai/`}
                            aria-label={translate({
                                id: 'pages.vecto-search.vectoLabel',
                                message: 'Search by Vecto',
                                description: 'The ARIA label for Vecto mention',
                            })}>
                            <svg
                                height="21"
                                viewBox="0 0 150 21"
                                width="140"
                                xmlns="http://www.w3.org/2000/svg">
                                <svg
                                    width="141"
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="21"
                                    x="34"
                                    viewBox="0 0 452 119" >
                                    <g>
                                        <polygon fill='#00D7F2' points="42,37.3 51.3,32.7 43.2,17 42,16.7 0,3.1 20.3,38.5 12.6,51.9 	" />
                                        <polygon fill='#00D7F2' points="61,9.4 100.9,16.7 68.9,65.4 57.6,45.2 42,53.4 32.8,58.2 42,73.9 68.7,119.1 143.6,0.4 	" />
                                    </g>
                                    <path fill='#000109' d="M280.2,72.6c0.2-1.4,0.3-2.8,0.3-4.2c0-8.6-3.1-16-9.2-22.1c-6.1-6.1-13.5-9.2-22.1-9.2l0,0
	c-8.6,0-15.9,3.1-22,9.2c-6.1,6.1-9.2,13.5-9.2,22.1c0,8.6,3.1,16,9.2,22.1c6.1,6.1,13.4,9.1,22,9.2l0,0c6.1,0,11.7-1.6,16.8-4.9
	c5.1-3.3,8.9-7.7,11.4-13.1h-17c-3.3,2.7-7,4.1-11.2,4.1l0,0c-4,0-7.6-1.2-10.7-3.7c-3.1-2.5-5.2-5.6-6.1-9.4h16.8H280.2z M233,62.3
	c1.2-3.3,3.3-6,6.3-8.1c3-2.1,6.3-3.1,9.9-3.1l0,0c3.7,0,6.9,1,9.9,3.1c2.9,2.1,5,4.8,6.3,8.1h-16.2H233z"/>
                                    <path fill='#000109' d="M318.5,99.6c-8.6,0-16-3.1-22.1-9.2c-6.1-6.1-9.2-13.5-9.2-22.1c0-8.6,3.1-16,9.2-22.1
	c6.1-6.1,13.5-9.2,22.1-9.2c6.2,0,11.9,1.7,17,5c5.1,3.4,8.9,7.8,11.4,13.3H330c-3.3-3-7.2-4.5-11.5-4.5c-4.8,0-8.8,1.7-12.2,5.1
	c-3.4,3.4-5.1,7.5-5.1,12.3c0,4.8,1.7,8.8,5.1,12.2c3.4,3.4,7.5,5.1,12.2,5.1c5.2,0,9.6-2,13.1-6h16c-2.3,5.9-6.1,10.7-11.4,14.4
	C330.9,97.8,325,99.6,318.5,99.6z"/>
                                    <path fill='#000109' d="M374.3,19.9v16.6h6.3v10.4h-6.3v31.9c0,2,0.7,3.6,2,4.9c1.3,1.3,3,2,4.8,2h3.5v13.9h-3.5
	c-5.7,0-10.6-2-14.7-6.1c-4-4.1-6.1-9-6.1-14.7V46.9h-6.3V36.5h6.3v-9.7L374.3,19.9z"/>
                                    <path fill='#000109' d="M442.4,46.4c-6.1-6.1-13.5-9.2-22.1-9.2c-8.6,0-16,3.1-22.1,9.2c-6.1,6.1-9.2,13.5-9.2,22.1
	c0,8.6,3.1,16,9.2,22.1c6.1,6.1,13.5,9.2,22.1,9.2c8.6,0,16-3.1,22.1-9.2c6.1-6.1,9.2-13.5,9.2-22.1
	C451.5,59.8,448.5,52.5,442.4,46.4z M432.6,80.7c-3.4,3.4-7.5,5.1-12.2,5.1c-4.8,0-8.8-1.7-12.2-5.1c-3.4-3.4-5.1-7.5-5.1-12.2
	c0-4.8,1.7-8.9,5.1-12.3c3.4-3.4,7.5-5.1,12.2-5.1c4.8,0,8.8,1.7,12.2,5.1c3.4,3.4,5.1,7.5,5.1,12.3
	C437.6,73.2,435.9,77.3,432.6,80.7z"/>
                                    <polygon fill='#000109' points="154.9,37.2 170.7,37.2 186.3,73.7 201.9,37.2 217.6,37.2 191.3,99.1 181.2,99.1 " />
                                </svg>
                                <clipPath id="a">
                                    <path d="m0 0h141v21h-141z" />
                                </clipPath>
                                <g clipPath="url(#a)">
                                    <path
                                        d="m2.648 14.604c.216.144.556.272 1.02.384s.872.168 1.224.168c.592 0 1.104-.092 1.536-.276.44-.184.772-.436.996-.756.232-.32.348-.688.348-1.104 0-.384-.08-.712-.24-.984-.16-.28-.396-.528-.708-.744-.304-.216-.708-.44-1.212-.672-.56-.256-.984-.468-1.272-.636s-.512-.352-.672-.552c-.152-.208-.228-.456-.228-.744 0-.384.156-.684.468-.9.32-.216.744-.324 1.272-.324.352 0 .648.036.888.108.248.072.52.176.816.312l.324-.732c-.28-.144-.604-.264-.972-.36-.36-.096-.732-.144-1.116-.144-.52 0-.98.092-1.38.276-.392.176-.696.42-.912.732-.208.312-.312.66-.312 1.044 0 .544.172 1.004.516 1.38.352.376.9.724 1.644 1.044.52.224.928.424 1.224.6.304.168.536.36.696.576.16.208.24.452.24.732 0 .392-.172.712-.516.96-.336.24-.816.36-1.44.36-.352 0-.712-.048-1.08-.144-.36-.104-.668-.22-.924-.348zm11.0963-2.364c0-.96-.204-1.736-.612-2.328-.4-.592-1.024-.888-1.872-.888-.56 0-1.048.132-1.46396.396-.408.256-.72.616-.936 1.08-.208.456-.312.98-.312 1.572 0 .936.26 1.684.78 2.244s1.27596.84 2.26796.84c.4 0 .764-.052 1.092-.156.328-.112.656-.26.984-.444l-.3-.696c-.36.176-.672.304-.936.384-.256.08-.54.12-.852.12-.688 0-1.2-.188-1.536-.564-.32796-.384-.50396-.904-.52796-1.56zm-4.19996-.648c.056-.544.224-.972.50396-1.284.288-.32.68-.48 1.176-.48.92 0 1.448.588 1.584 1.764zm5.84426-1.344c.288-.128.552-.224.792-.288.248-.072.544-.108.888-.108.44 0 .76.124.96.372.208.248.312.588.312 1.02v.324h-1.5c-.632 0-1.14.156-1.524.468s-.576.748-.576 1.308c0 .536.168.972.504 1.308.344.336.84.504 1.488.504.304 0 .616-.072.936-.216.32-.152.588-.328.804-.528l.12.588h.708v-4.02c0-.376-.096-.712-.288-1.008s-.46-.528-.804-.696-.736-.252-1.176-.252c-.264 0-.6.048-1.008.144-.4.096-.704.216-.912.36zm.228 3.096c0-.32.104-.588.312-.804.216-.224.512-.336.888-.336h1.536v1.32c-.216.256-.468.464-.756.624-.28.16-.576.24-.888.24-.36 0-.632-.104-.816-.312s-.276-.452-.276-.732zm6.0874-2.352c.272-.28.604-.524.996-.732.392-.216.748-.324 1.068-.324l-.228-.756c-.28 0-.604.1-.972.3s-.684.412-.948.636l-.3-.936h-.564v5.82h.948zm6.9986 2.952c-.28.144-.532.248-.756.312s-.512.096-.864.096c-.584 0-1.036-.212-1.356-.636s-.48-.976-.48-1.656c.008-.648.18-1.18.516-1.596.336-.424.792-.636 1.368-.636.336 0 .608.032.816.096.216.064.484.164.804.3l.288-.672c-.232-.152-.54-.276-.924-.372-.376-.104-.696-.156-.96-.156-.576 0-1.08.132-1.512.396-.432.256-.768.616-1.008 1.08-.232.456-.348.98-.348 1.572 0 .6.112 1.136.336 1.608.224.464.548.828.972 1.092.424.256.924.384 1.5.384.264 0 .588-.052.972-.156.384-.096.696-.22.936-.372zm4.6201-4.944c.616 0 1.072.188 1.368.564.304.368.456.864.456 1.488v3.936h-.948v-3.804c0-.432-.08-.768-.24-1.008s-.428-.36-.804-.36c-.288 0-.616.1-.984.3-.36.2-.68.452-.96.756v4.128h-.948v-8.352l.948-.12v3.396c.28-.272.612-.492.996-.66.392-.176.764-.264 1.116-.264zm8.5136.024c.864 0 1.54.284 2.028.852.496.56.744 1.304.744 2.232 0 .592-.116 1.12-.348 1.584-.224.456-.548.816-.972 1.08-.416.256-.908.384-1.476.384-.24 0-.496-.052-.768-.156-.264-.096-.512-.236-.744-.42l-.204.42h-.564v-8.352l.948-.12v2.94c.216-.144.444-.252.684-.324.24-.08.464-.12.672-.12zm0 5.328c.576 0 1.02-.208 1.332-.624s.472-.952.48-1.608c0-.688-.156-1.24-.468-1.656-.304-.424-.748-.636-1.332-.636-.288 0-.54.044-.756.132s-.42.224-.612.408v3.468c.192.168.396.296.612.384s.464.132.744.132zm5.0915 1.608c-.088.24-.224.42-.408.54-.176.128-.452.28-.828.456l.288.684c.424-.088.796-.26 1.116-.516.328-.256.56-.564.696-.924l2.568-7.02h-.96l-1.668 4.5-1.764-4.68-.84.36 2.16 5.604z"
                                     />
                                </g>
                            </svg>
                        </a>
                    </div>
                </div>
                {searchResultVecto.results != undefined && searchResultVecto != [] ? (
                    <main>
                        {searchResultVecto.results.map(
                            (result,i) => (
                                <article key={i} className={styles.searchResultItem}>
                                    <h2 className={styles.searchResultItemHeading}>
                                        <Link to={result.data.URL} dangerouslySetInnerHTML={{ __html: result.data.title }} />
                                    </h2>

                                    {/* {result.length > 0 && (
                                        <nav aria-label="breadcrumbs">
                                            <ul
                                                className={clsx(
                                                    'breadcrumbs',
                                                    styles.searchResultItemPath,
                                                )}>
                                                {result.map((html, index) => (
                                                    <li
                                                        key={index}
                                                        className="breadcrumbs__item"
                                                        // Developer provided the HTML, so assume it's safe.
                                                        // eslint-disable-next-line react/no-danger
                                                        dangerouslySetInnerHTML={{ __html: html }}
                                                    />
                                                ))}
                                            </ul>
                                        </nav>
                                    )} */}

                                    {result && (
                                        <p
                                            className={styles.searchResultItemSummary}
                                            // Developer provided the HTML, so assume it's safe.
                                            // eslint-disable-next-line react/no-danger
                                            dangerouslySetInnerHTML={{ __html: result.data.content }}
                                        />
                                    )}
                                </article>
                            ),
                        )}
                    </main>
                ) : (
    [
      searchQuery && !searchResultVecto.results && (
        <p key="no-results">
          <Translate
            id="theme.SearchPage.noResultsText"
            description="The paragraph for empty search result">
            No results were found
          </Translate>
        </p>
      ),
      !!searchResultState.loading && (
        <div key="spinner" className={styles.loadingSpinner} />
      ),
    ]
  )}
                {/* {searchResultState.hasMore && (
                    <div className={styles.loader} ref={setLoaderRef}>
                        <Translate
                            id="theme.SearchPage.fetchingNewResults"
                            description="The paragraph for fetching new search results">
                            Fetching new results...
                        </Translate>
                    </div>
                )} */}
            </div>
        </Layout>
    );
}