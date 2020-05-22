import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Headertitle from "../components/header-title"

const Blog = () => {
  const data = useStaticQuery(
    graphql`
      {
        allContentfulWebDoctorBlogs {
          edges {
            node {
              id
              slug
              title
              subtitle
              createdAt(formatString: "MMMM DD YYYY")
              author
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
    `
  )
  return (
    <Layout>
      <SEO title="News" />
      <div className="news__wrapper">
        <Headertitle
          title="Life at "
          span="The Web Doctor"
          reset="news__size__override"
        />
        <div className="news__wrapper__container">
          {data.allContentfulWebDoctorBlogs.edges.map(edge => {
            return (
              <div
                className="news__wrapper__container__blogs"
                key={edge.node.id}
              >
                <div className="news__wrapper__container__blogs__inner">
                  <div className="news__wrapper__container__blogs__inner__content">
                    <h2>{edge.node.title}</h2>
                    <h5>{edge.node.createdAt}</h5>
                    <h6>{edge.node.author}</h6>
                    <p>{edge.node.subtitle}</p>
                    <div className="news__wrapper__container__blogs__inner__content__btn">
                      <Link to={`/news/${edge.node.slug}`}>
                        <button>Read More</button>
                      </Link>
                    </div>
                  </div>
                  <div className="news__wrapper__container__blogs__inner__img">
                    <img alt="news" src={edge.node.image.file.url}></img>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default Blog
