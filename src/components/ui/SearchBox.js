import React from "react"
import { connectSearchBox } from "react-instantsearch-dom"
import { InputGroup, InputLeftElement, Input } from "@chakra-ui/react"
import { SearchIcon } from "@chakra-ui/icons"

export default connectSearchBox(({ refine, currentRefinement, onFocus }) => (
  <form>
    <InputGroup>
      <InputLeftElement
        pointerEvents="none"
        children={<SearchIcon color="dimGray.300" />}
      />
      <Input
        type="text"
        placeholder="Cercar projectes..."
        aria-label="Cercar"
        onChange={e => refine(e.target.value)}
        value={currentRefinement}
        onFocus={onFocus}
      />
    </InputGroup>
  </form>
))
