import type {
  AutocompleteApi,
  AutocompleteState,
} from '@algolia/autocomplete-core';
import type { MutableRefObject } from 'react';
import React from 'react';

//   import { MAX_QUERY_SIZE } from './constants';
import { LoadingIcon } from '../icons/LoadingIcon';
import { ResetIcon } from '../icons/ResetIcon';
import { SearchIcon } from '../icons/SearchIcon';
//   import type { InternalDocSearchHit } from './types';
import styles from './styles.module.css';
type InternalDocSearchHit = {
  __docsearch_parent: InternalDocSearchHit | null;
};
export type SearchBoxTranslations = Partial<{
  resetButtonTitle: string;
  resetButtonAriaLabel: string;
  cancelButtonText: string;
  cancelButtonAriaLabel: string;
}>;

interface SearchBoxProps {
  // state: AutocompleteState<InternalDocSearchHit>;
  autoFocus: boolean;
  inputRef: MutableRefObject<HTMLInputElement | null>;
  // onClose: () => void;
  isFromSelection: boolean;
  translations?: SearchBoxTranslations;
}

// export function postSearchQueryToSearchPages(query?: string) {
//   return query;
// }

export function SearchBox({ translations = {}, ...props }: SearchBoxProps) {
  const {
    resetButtonTitle = 'Clear the query',
    resetButtonAriaLabel = 'Clear the query',
    cancelButtonText = 'Cancel',
    cancelButtonAriaLabel = 'Cancel',
  } = translations;
  // const { onReset } = props.getFormProps({
  //   inputElement: props.inputRef.current,
  // });
  const MAX_QUERY_SIZE = 64;
  const [searchQuery, setSearchQuery] = React.useState("")
  const onSubmit = (e) => {
    if (e.key === 'Enter') {
      console.log(searchQuery);
      // postSearchQueryToSearchPages(searchQuery)
      // window.open("http://localhost:3000/vecto_search/", "_self");
    }
  }
  React.useEffect(() => {
    if (props.autoFocus && props.inputRef.current) {
      props.inputRef.current.focus();
    }
  }, [props.autoFocus, props.inputRef]);

  React.useEffect(() => {
    if (props.isFromSelection && props.inputRef.current) {
      props.inputRef.current.select();
    }
  }, [props.isFromSelection, props.inputRef]);
  return (
    <>
      <form
        className="DocSearch-Form"
        onSubmit={(event) => {
          event.preventDefault();
        }}
        // method="post"
        // action="http://localhost:3000/vecto-search/"
        // target="_self"
      //   onReset={onReset}
      >
        <label className="DocSearch-MagnifierLabel">
          <SearchIcon />
        </label>

        <div className="DocSearch-LoadingIndicator">
          <LoadingIcon />
        </div>

        <input
          className="DocSearch-Input"
          ref={props.inputRef}
          // {...props.getInputProps({
          //   inputElement: props.inputRef.current!,
          //   autoFocus: props.autoFocus,
          //   maxLength: MAX_QUERY_SIZE,
          // })}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              console.log(searchQuery);
              // postSearchQueryToSearchPages(searchQuery)
              window.open("http://localhost:3000/vecto_search/","_self");
            }
          }
          }
        />

        <button
          type="reset"
          title={resetButtonTitle}
          className="DocSearch-Reset"
          aria-label={resetButtonAriaLabel}
        // hidden={searchQuery == ""}
        >
          <ResetIcon />
        </button>
      </form>

      <button
        className="DocSearch-Cancel"
        type="reset"
        aria-label={cancelButtonAriaLabel}
      //   onClick={props.onClose}
      >
        {cancelButtonText}
      </button>
    </>
  );
}