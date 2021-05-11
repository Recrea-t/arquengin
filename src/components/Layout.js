import "@fontsource/roboto"
import "@fontsource/roboto/300.css" // Light
import "@fontsource/roboto/700.css" // Bold
import "@fontsource/dm-serif-text"

import React from "react"
import { useLocation } from "@reach/router"
import useSiteMetadata from "./siteMetadata"

import { Flex, Text, Link } from "@chakra-ui/react"

import CookieConsent from "react-cookie-consent"
import { initializeAndTrack } from "gatsby-plugin-gdpr-cookies"

import Header from "./sections/Header"
import Footer from "./sections/Footer"
import SEO from "./SEO/seo"

const TemplateWrapper = props => {
  const { title, description, image, isBlogPost, datePublished } = props

  const { defaultTitle } = useSiteMetadata()
  const location = useLocation()

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
          id="main"
          pos="relative"
          w="full"
          pt={{ base: "64px", lg: "96px" }}
          direction="column"
          transition="all .2s cubic-bezier(0.4, 0, 1, 1)"
        >
          {props.children}
        </Flex>
        <Footer title={defaultTitle} />
        <CookieConsent
          location="bottom"
          buttonText="Acceptar"
          onAccept={() => {
            initializeAndTrack(location)
          }}
          enableDeclineButton
          declineButtonText="&times;"
          cookieName="gatsby-gdpr-google-analytics"
          containerClasses="cookie-consent-container"
          style={{
            backgroundColor: "#404040",
            color: "#fff",
            margin: "0 1rem 2rem 1rem",
            maxWidth: "calc(100% - 2rem)",
            bottom: "2rem",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
          contentClasses="cookie-consent-content"
          buttonWrapperClasses="cookie-consent-buttons"
          buttonClasses="accept-btn"
          declineButtonClasses="decline-btn"
          expires={150}
        >
          <Text color="dimGray.500">
            Utilitzem galetes per millorar la informació i optimitzar
            l'experiència de l'usuari de manera contínua.
            <br />
            Per a més informació, consulteu la{" "}
            <Link
              href="/politica-de-galetes"
              target="_blank"
              title="Política de cookies"
              fontWeight="semibold"
            >
              {" "}
              política de galetes
            </Link>
            .
          </Text>
        </CookieConsent>
      </Flex>
    </React.Fragment>
  )
}

export default TemplateWrapper
