import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"

const BlogPost = ({ pageContext }) => {
  return (
    <Layout>
      <SEO title={pageContext.title} />
      <div className="blogs__wrapper">
        <div className="blogs__wrapper__title">
          <div className="blogs__wrapper__title__inner">
            <h1>{pageContext.title}</h1>
          </div>
        </div>
        <div className="blogs__wrapper__data">
          <h5>{pageContext.date}</h5>
          <h6>{pageContext.author}</h6>
        </div>
        <div className="blogs__wrapper__content">
          <h3>{pageContext.subtitle}</h3>
          <img src={pageContext.image} />
          <div
            className="blogs__wrapper__content__html"
            dangerouslySetInnerHTML={{ __html: pageContext.html }}
          ></div>
        </div>
      </div>
    </Layout>
  )
}

export default BlogPost
