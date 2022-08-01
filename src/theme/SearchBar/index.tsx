// By default, the classic theme does not provide any SearchBar implementation
// If you swizzled this, it is your responsibility to provide an implementation
// Tip: swizzle the SearchBar from the Algolia theme for inspiration:
// npm run swizzle @docusaurus/theme-search-algolia SearchBar
// export {default} from '@docusaurus/Noop';

// import React, { useState, useEffect } from 'react';
// import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

// export default function SearchBarWrapper() {
//     const [searchStr, setSearchStr] = useState("");
//     const { globalData, siteConfig, siteMetadata } = useDocusaurusContext();

//     function onSubmit(e) {
//         if (e.key === 'Enter') {
//             // window.open("http://localhost:3000/vecto_search/","_self");
//             let TOKEN = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ1cG4iOiJiYXJfdG9rZW4iLCJpc3MiOiJodHRwczovL3ZlY3RvLmFpIiwiZ3JvdXBzIjpbInVzZXIiXSwiZXhwIjoxNjYxNjUzNDA1LCJhdWQiOlsiMyJdLCJpYXQiOjE2NTkwNjE0MDUsImp0aSI6IjAxYWI0ZDIyLWE3Y2MtNDA0MS05ODAzLTcyNWNmNDQ2YjYyNyJ9.OW1CQJO8RQuJtwShyzQV7nYnS1SIZEqjWYscJ5T6_yWzzc8xiPsoLS2_fP0zu76IpF_4KmCSMZROQNejNmr5sBYzBiiI5ZY9C42k1QyGBE9rlRl2jjxqMFhxy8yYxSIOeZTyXVmJmi4tgUGj7OFiEeJWWXW8mxq5AOSwFhXcWg_8k2DS-71AxU49trOLIG99cZWfH5Hzo41KrBoINYtgumrInT5tILPFrMSBLjXbVExa7Fn3rhs_8_lqykL7LXghAXD-RbK8IeR5HHmzi5eVrhrt1foKCA62afO-xmmUFR7-PirC7cQC_MVscl3vf8Od4FuvZkIXEZHqYSEqyAi22w";
//             let vecto_base_url = "http://localhost:8080/api/v0";
//             let vector_space_id = 3;
//             let modality = 'TEXT';
//             let top_k = 10;
//             let data = new FormData();
//             data.append('vector_space_id', vector_space_id)
//             data.append('modality', modality)
//             data.append('top_k', top_k)
//             data.append('query', new File([new Blob([searchStr])], "hi"))
//             // data.append('ids', 0)
            
//             fetch("http://localhost:8080/api/v0/lookup", {
//                 method: 'POST',
//                 body : data,
//                 headers: {
//                     'Authorization': 'Bearer ' + TOKEN
//                 }
//             })
//                 .then((res) => res.json())
//                 .then(
//                     (result) => {
//                         alert(result)
//                     },
    
//                     // Note: it's important to handle errors here
//                     // instead of a catch() block so that we don't swallow
//                     // exceptions from actual bugs in components.
//                     (error) => {
//                         alert(error)
//                     }
//                 );
            
//             console.log(globalData)
//             console.log(siteConfig)
//             }
//     }


// return (
//         <>
//             <input
//                 type="text"
//                 name="search-vecto"
//                 id="search-vecto"
//                 placeholder="Search for..."
//                 value={searchStr}
//                 onChange={(e) => setSearchStr(e.target.value)}
//                 onKeyDown={onSubmit}
//             />
//         </>
//     );
// }

// import type {
//     AutocompleteState,
//     AutocompleteOptions,
//   } from '@algolia/autocomplete-core';
//   import React from 'react';
//   import { createPortal } from 'react-dom';
// //   import type { SearchClient } from 'typesense';
// //   import type { ConfigurationOptions as TypesenseConfigurationOptions } from 'typesense/lib/Typesense/Configuration';
// //   import type { SearchParams as TypesenseSearchParams } from 'typesense/lib/Typesense/Documents';
  
//   import { DocSearchButton } from './DocSearchButton';
// //   import { DocSearchModal } from './DocSearchModal';
// //   import type {
// //     DocSearchHit,
// //     InternalDocSearchHit,
// //     StoredDocSearchHit,
// //   } from './types';
//   import { useDocSearchKeyboardEvents } from './useDocSearchKeyboardEvents';
  
//   import type { ButtonTranslations, ModalTranslations } from '.';
  
//   export type DocSearchTranslations = Partial<{
//     button: ButtonTranslations;
//     modal: ModalTranslations;
//   }>;
  
// //   export interface DocSearchProps {
// //     typesenseCollectionName: string;
// //     typesenseServerConfig: TypesenseConfigurationOptions;
// //     typesenseSearchParameters: TypesenseSearchParams;
// //     placeholder?: string;
// //     transformItems?: (items: DocSearchHit[]) => DocSearchHit[];
// //     hitComponent?: (props: {
// //       hit: InternalDocSearchHit | StoredDocSearchHit;
// //       children: React.ReactNode;
// //     }) => JSX.Element;
// //     resultsFooterComponent?: (props: {
// //       state: AutocompleteState<InternalDocSearchHit>;
// //     }) => JSX.Element | null;
// //     transformSearchClient?: (searchClient: SearchClient) => SearchClient;
// //     disableUserPersonalization?: boolean;
// //     initialQuery?: string;
// //     navigator?: AutocompleteOptions<InternalDocSearchHit>['navigator'];
// //     translations?: DocSearchTranslations;
// //     getMissingResultsUrl?: ({ query: string }) => string;
// //   }
  
//   export default function DocSearch(props) {
//     const searchButtonRef = React.useRef<HTMLButtonElement>(null);
//     const [isOpen, setIsOpen] = React.useState(false);
//     const [initialQuery, setInitialQuery] = React.useState<string | undefined>(
//       props?.initialQuery || undefined
//     );
  
//     const onOpen = React.useCallback(() => {
//       setIsOpen(true);
//     }, [setIsOpen]);
  
//     const onClose = React.useCallback(() => {
//       setIsOpen(false);
//     }, [setIsOpen]);
  
//     const onInput = React.useCallback(
//       (event: KeyboardEvent) => {
//         setIsOpen(true);
//         setInitialQuery(event.key);
//       },
//       [setIsOpen, setInitialQuery]
//     );
  
//     useDocSearchKeyboardEvents({
//       isOpen,
//       onOpen,
//       onClose,
//       onInput,
//       searchButtonRef,
//     });
  
//     return (
//       <>
//         <DocSearchButton
//           ref={searchButtonRef}
//           translations={props?.translations?.button}
//           onClick={onOpen}
//         />
  
//         {/* {isOpen &&
//           createPortal(
//             <DocSearchModal
//               {...props}
//               initialScrollY={window.scrollY}
//               initialQuery={initialQuery}
//               translations={props?.translations?.modal}
//               onClose={onClose}
//             />,
//             document.body
//           )} */}
//       </>
//     );
//   }

import React, {useState, useRef, useCallback, useMemo} from 'react';
import {createPortal} from 'react-dom';
// @ts-ignore
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
// @ts-ignore
import {useHistory} from '@docusaurus/router';
// @ts-ignore
import {useBaseUrlUtils} from '@docusaurus/useBaseUrl';
// @ts-ignore
import Link from '@docusaurus/Link';
// @ts-ignore
import Head from '@docusaurus/Head';
// @ts-ignore
import {isRegexpStringMatch} from '@docusaurus/theme-common';
// @ts-ignore
import {useSearchPage} from '@docusaurus/theme-common/internal';
import {
  useDocSearchKeyboardEvents,
} from './useDocSearchKeyboardEvents';
import { DocSearchButton } from './DocSearchButton';
// @ts-ignore
import Translate, {translate} from '@docusaurus/Translate';
import type {AutocompleteState} from '@algolia/autocomplete-core';
import {useContextualSearchFilters} from '@docusaurus/theme-common';
import { DocSearchModal } from './DocSearchModal';
// import type { SearchBoxTranslations } from './SearchBox';

export function useTypesenseContextualFilters(): string {
  const {locale, tags} = useContextualSearchFilters();

  const languageFilter = `language:=${locale}`;

  let tagsFilter;
  if (tags.length > 0) {
    tagsFilter = `docusaurus_tag:=[${tags.join(',')}]`;
  }

  return [languageFilter, tagsFilter].filter((e) => e).join(' && ');
}

function DocSearch() {
  const {siteMetadata} = useDocusaurusContext();
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const modalRef = React.useRef<HTMLDivElement | null>(null);
  const formElementRef = React.useRef<HTMLDivElement | null>(null);
  const contextualSearchFacetFilters =
    useTypesenseContextualFilters() as string;

  const {withBaseUrl} = useBaseUrlUtils();
  const history = useHistory();
  const searchContainer = useRef<HTMLDivElement | null>(null);
  const searchButtonRef = useRef<HTMLButtonElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [initialQuery, setInitialQuery] = useState<string | undefined>(
    undefined,
  );


  const onOpen = useCallback(() => {
    // importDocSearchModalIfNeeded().then(() => {
    //   searchContainer.current = document.createElement('div');
    //   document.body.insertBefore(
    //     searchContainer.current,
    //     document.body.firstChild,
    //   );
      setIsOpen(true);
    // });
  }, [setIsOpen]);

  const onClose = useCallback(() => {
    setIsOpen(false);
    searchContainer.current?.remove();
  }, [setIsOpen]);

  const onInput = useCallback(
    (event: KeyboardEvent) => {
    //   importDocSearchModalIfNeeded().then(() => {
        setIsOpen(true);
        setInitialQuery(event.key);
    //   });
    },
    [setIsOpen, setInitialQuery],
  );

  useDocSearchKeyboardEvents({
    isOpen,
    onOpen,
    onClose,
    onInput,
    searchButtonRef,
  });
//   console.log(onInput)
  return (
    <>
      <DocSearchButton
        // onTouchStart={importDocSearchModalIfNeeded}
        // onFocus={importDocSearchModalIfNeeded}
        // onMouseOver={importDocSearchModalIfNeeded}
        onClick={onOpen}
        ref={searchButtonRef}
        // translations={translations.button}
      />
       {isOpen &&
        createPortal(
          <DocSearchModal 
            onClose={onClose}
          />,
          document.body
        )}
    </>
  );
}

export default function SearchBar(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <DocSearch />
  );
}

