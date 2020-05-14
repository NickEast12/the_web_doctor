const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const response = await graphql(`
    {
      allContentfulWebDoctorBlogs {
        edges {
          node {
            id
            slug
            title
            subtitle
            author
            createdAt(formatString: "MMMM DD YYYY")
            image {
              id
              file {
                url
                fileName
                contentType
              }
            }
            childContentfulWebDoctorBlogsContentRichTextNode {
              id
              childContentfulRichText {
                html
              }
            }
          }
        }
      }
    }
  `)
  response.data.allContentfulWebDoctorBlogs.edges.forEach(edge => {
    createPage({
      path: `/news/${edge.node.slug}`,
      component: path.resolve("./src/templates/blog-post.js"),
      context: {
        slug: edge.node.slug,
        id: edge.node.id,
        title: edge.node.title,
        date: edge.node.createdAt,
        subtitle: edge.node.title,
        author: edge.node.author,
        image: edge.node.image.file.url,
        html:
          edge.node.childContentfulWebDoctorBlogsContentRichTextNode
            .childContentfulRichText.html,
      },
    })
  })
}
