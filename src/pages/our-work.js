import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

import Headertitle from "../components/header-title"
import Placeholder from "../images/islandP1.jpg"

const ImageBoxes = styled.div`
  div {
    &:nth-child(1) {
      background-image: url(${Placeholder});
    }
    &:nth-child(2) {
      background-image: url(${Placeholder});
    }
    &:nth-child(3) {
      background-image: url(${Placeholder});
    }
    &:nth-child(4) {
      background-image: url(${Placeholder});
    }
    &:nth-child(5) {
      background-image: url(${Placeholder});
    }
    &:nth-child(6) {
      background-image: url(${Placeholder});
    }
  }
`

const ContactPage = () => (
  <Layout>
    <SEO title="Our work " />
    <div className="work__wrapper">
      <Headertitle title="We ensure all we do had" span=" form & function" />
      <ImageBoxes className="work__wrapper__lower">
        <div className="work__wrapper__lower__boxes">
          <h4>Project 1</h4>
        </div>
        <div className="work__wrapper__lower__boxes">
          <h4>Project 2</h4>
        </div>
        <div className="work__wrapper__lower__boxes">
          <h4>Project 3</h4>
        </div>
        <div className="work__wrapper__lower__boxes">
          <h4>Project 4</h4>
        </div>
        <div className="work__wrapper__lower__boxes">
          <h4>Project 5</h4>
        </div>
        <div className="work__wrapper__lower__boxes">
          <h4>Project 6</h4>
        </div>
      </ImageBoxes>
    </div>
  </Layout>
)

export default ContactPage
