import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/main.scss"
import styled from "styled-components"
import Logo1 from "../images/logo1.png"
import Logo2 from "../images/logo2.png"
import Logo3 from "../images/logo3.png"
import Logo4 from "../images/logo4.png"
import Logo5 from "../images/logo5.png"
import IslandPhoto from "../images/islandP1.jpg"

const PhotoDiv = styled.div`
  background-image: url(${IslandPhoto});
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="main__wrapper">
      <div className="main__wrapper__title">
        <h1>
          We craft digital experiences that <span> excite & inspire</span>
        </h1>
      </div>
      <div className="main__wrapper__projects">
        <Link to="/projects/luxury-island">
          <PhotoDiv className="main__wrapper__projects__inner">
            <h4>Luxury Island </h4>
            <h2>An exclusive private island for hire</h2>
          </PhotoDiv>
        </Link>
        <PhotoDiv className="main__wrapper__projects__inner">
          <h4>Luxury Island </h4>
          <h2>An exclusive private island for hire</h2>
        </PhotoDiv>
        <PhotoDiv className="main__wrapper__projects__inner">
          <h4>Luxury Island </h4>
          <h2>An exclusive private island for hire</h2>
        </PhotoDiv>
        <PhotoDiv className="main__wrapper__projects__inner">
          <h4>Luxury Island </h4>
          <h2>An exclusive private island for hire</h2>
        </PhotoDiv>
      </div>
      <div className="main__wrapper__clients">
        <h2>
          Reccomended by our <span>global clients </span>
        </h2>
        <div className="main__wrapper__clients__wrapper">
          <div className="main__wrapper__clients__wrapper__boxes">
            <img src={Logo1} alt="" />
          </div>
          <div className="main__wrapper__clients__wrapper__boxes">
            <img src={Logo2} alt="" />
          </div>
          <div className="main__wrapper__clients__wrapper__boxes">
            <img src={Logo3} alt="" />
          </div>
          <div className="main__wrapper__clients__wrapper__boxes">
            <img src={Logo4} alt="" />
          </div>
          <div className="main__wrapper__clients__wrapper__boxes">
            <img src={Logo5} alt="" />
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
