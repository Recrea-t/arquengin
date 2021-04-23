const slugify = require("slugify")
const escapeStringRegexp = require("escape-string-regexp")

const indexName = `projectes`

const pageQuery = `{
  pages:
    markdownRemark(fileAbsolutePath: {regex: "/(projectes)/"}) {
      frontmatter {
        projectes {
          title
          category
          images {
						thumbnail: src {
							childImageSharp {
								gatsbyImageData (
									width: 340
									aspectRatio: 1
									transformOptions: { cropFocus: CENTER }
									placeholder: BLURRED
									formats: [AVIF, WEBP, AUTO]
								)
							}
						}
					}
				}
			}
		}
}`

function pageToAlgoliaRecord({ title, category, images }) {
  return {
    objectID: slugify(title, { lower: true }),
    title: title,
    category: category,
    image: images[0].thumbnail,
  }
}

const queries = [
  {
    query: pageQuery,
    transformer: ({ data }) =>
      data.pages.frontmatter.projectes.map(pageToAlgoliaRecord),
    indexName,
    settings: {
      searchableAttributes: [`category`],
      attributesForFaceting: ["searchable(category)"],
    },
  },
]

module.exports = queries
