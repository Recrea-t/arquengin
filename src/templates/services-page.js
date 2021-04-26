import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Service from "../components/sections/Service"

const ServicePage = props => {
  const { frontmatter } = props.data.markdownRemark

  return (
    <Layout title={frontmatter.title} description={frontmatter.description}>
      {frontmatter.services.map(service => (
        <Service {...service} />
      ))}
    </Layout>
  )
}

export default ServicePage

export const query = graphql`
  query ServicePageTemplateQuery($id: String) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        title
        description
        services {
          id
          title
          description
          className
          list
          sections {
            title
            description
            list {
              title
              links {
                title
                url
              }
            }
          }
        }
      }
    }
  }
`
