import "@fontsource/roboto"
import "@fontsource/roboto/300.css" // Light
import "@fontsource/roboto/700.css" // Bold
import "@fontsource/dm-serif-text"

import React from "react"
import useSiteMetadata from "./siteMetadata"

import { Flex } from "@chakra-ui/react"

import Header from "./sections/Header"
import Footer from "./sections/Footer"
import SEO from "./SEO/seo"

const TemplateWrapper = props => {
  const { title, description, image, isBlogPost, datePublished } = props

  const { defaultTitle } = useSiteMetadata()

  return (
    <React.Fragment>
      <SEO
        title={title}
        description={description}
        image={image}
        isBlogPost={isBlogPost}
        datePublished={datePublished}
      />
      <Flex
        direction="column"
        align="center"
        justify="space-between"
        overflow="hidden"
        minH="100vh"
        pos="relative"
      >
        <Header />
        <Flex
          as="main"
          pos="relative"
          w="full"
          pt={{ base: "64px", lg: "96px" }}
          direction="column"
        >
          {props.children}
        </Flex>
        <Footer title={defaultTitle} />
      </Flex>
    </React.Fragment>
  )
}

export default TemplateWrapper
