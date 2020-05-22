import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

import Headertitle from "../components/header-title"
import DevelopmentPhoto from "../images/website-developement.jpg"
import DesignPhoto from "../images/website-design.jpg"
import PhotographyPhoto from "../images/photography.jpg"
import MobilePhoto from "../images/mobile-site.jpg"
import SocialMediaPhoto from "../images/social-media.jpg"
import SeoPhoto from "../images/SEO.jpg"

const ImageBoxes = styled.div`
  div {
    &:nth-child(1) {
      background-image: url(${DevelopmentPhoto});
    }
    &:nth-child(2) {
      background-image: url(${DesignPhoto});
      height: 20rem;
    }
    &:nth-child(3) {
      background-image: url(${PhotographyPhoto});
    }
    &:nth-child(4) {
      background-image: url(${MobilePhoto});
      background-position: left;
      height: 20rem;
    }
    &:nth-child(5) {
      background-image: url(${SocialMediaPhoto});
    }
    &:nth-child(6) {
      background-image: url(${SeoPhoto});
    }
  }
`

const ContactPage = () => (
  <Layout>
    <SEO title="What we do " />
    <div className="wwd__wrapper">
      <Headertitle title="We deliver success by going" span=" above & beyond" />
      <ImageBoxes className="wwd__wrapper__lower">
        <div className="wwd__wrapper__lower__boxes">
          <h4>Website Development</h4>
        </div>
        <div className="wwd__wrapper__lower__boxes">
          <h4>Website Design</h4>
        </div>
        <div className="wwd__wrapper__lower__boxes">
          <h4>Photography</h4>
        </div>
        <div className="wwd__wrapper__lower__boxes">
          <h4>Mobile Websites</h4>
        </div>
        <div className="wwd__wrapper__lower__boxes">
          <h4>Social Media</h4>
        </div>
        <div className="wwd__wrapper__lower__boxes">
          <h4>Search Engine Optimisation</h4>
        </div>
      </ImageBoxes>
    </div>
  </Layout>
)

export default ContactPage
