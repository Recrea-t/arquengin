const path = require("path")
const slugify = require("slugify")
const { createFilePath } = require("gatsby-source-filesystem")

async function createProjectPages(actions, projects) {
  const { createPage } = actions

  projects.forEach(project => {
    const slug = slugify(project.title, { lower: true })

    createPage({
      path: `/projectes/${slug}`,
      component: require.resolve("./src/templates/project-page.js"),
      context: {
        slug: slug,
        ...project,
      },
    })
  })
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              templateKey
              projectes {
                title
                description
                category
                images {
                  childImageSharp {
                    gatsbyImageData(
                      width: 815
                      placeholder: BLURRED
                      formats: [AVIF, WEBP, AUTO]
                    )
                  }
                }
              }
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const posts = result.data.allMarkdownRemark.edges

    posts.forEach(edge => {
      const id = edge.node.id
      const slug = edge.node.fields.slug

      if (edge.node.frontmatter.templateKey === "blog-page") {
        return
      }

      createPage({
        path: edge.node.fields.slug,
        tags: edge.node.frontmatter.tags,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
        ),
        // additional data can be passed via context
        context: {
          id,
        },
      })

      if (slug === "/projectes/") {
        createProjectPages(actions, edge.node.frontmatter.projectes)
      }
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
