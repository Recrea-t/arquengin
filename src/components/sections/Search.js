import { default as React, useState } from "react"
import algoliasearch from "algoliasearch/lite"

import { InstantSearch } from "react-instantsearch-dom"

import SearchFilters from "../ui/SearchFilters"
import SearchResult from "../ui/SearchResult"

export default function Search({ indices }) {
  const [query, setQuery] = useState()
  const [hasFocus, setFocus] = useState(false)
  const searchClient = algoliasearch(
    process.env.GATSBY_ALGOLIA_APP_ID,
    process.env.GATSBY_ALGOLIA_SEARCH_KEY
  )

  return (
    <InstantSearch
      searchClient={searchClient}
      indexName={indices[0].name}
      onSearchStateChange={({ query }) => setQuery(query)}
    >
      <SearchFilters
        attribute="category"
        onFocus={() => setFocus(true)}
        hasFocus={hasFocus}
      />
      <SearchResult
        show={query && query.length > 0 && hasFocus}
        indices={indices}
      />
    </InstantSearch>
  )
}
