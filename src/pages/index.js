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
import Adventure from "../images/adv1.jpg"
import Boom from "../images/boom4.jpg"
import Coffee from "../images/coffee1.jpg"

const PhotoDiv = styled.div`
  background-image: url(${IslandPhoto});
`

const PhotoDiv2 = styled.div`
  background-image: url(${Adventure});
`
const PhotoDiv3 = styled.div`
  background-image: url(${Boom});
`
const PhotoDiv4 = styled.div`
  background-image: url(${Coffee});
`

const IndexPage = () => (
  <Layout>
    <SEO title="The Web Doctor" />
    <div className="main__wrapper">
      <div className="main__wrapper__title">
        <h1>
          We craft digital experiences that <span> excite & inspire</span>
        </h1>
      </div>
      <div className="main__wrapper__projects">
        <Link to="/projects/luxury-island" className="grid-1">
          <PhotoDiv className="main__wrapper__projects__inner ">
            <h4>Luxury Island </h4>
            <h2>An exclusive private island for hire</h2>
            <div className="main__wrapper__projects__inner__popup">
              <h3>Visit Project</h3>
            </div>
          </PhotoDiv>
        </Link>
        <Link to="/projects/adventure-hiking" className="grid-2">
          <PhotoDiv2 className="main__wrapper__projects__inner ">
            <h4>Adventure Hiking </h4>
            <h2>Fall in love with the outdoors again</h2>
            <div className="main__wrapper__projects__inner__popup">
              <h3>Visit Project</h3>
            </div>
          </PhotoDiv2>
        </Link>
        <Link to="/projects/euphoria-festival" className="grid-3">
          <PhotoDiv3 className="main__wrapper__projects__inner ">
            <h4>Euphoria Festival</h4>
            <h2>Complete rework of the UK largest festival</h2>
            <div className="main__wrapper__projects__inner__popup">
              <h3>Visit Project</h3>
            </div>
          </PhotoDiv3>
        </Link>
        <Link to="/projects/independent-coffee" className="grid-4">
          <PhotoDiv4 className="main__wrapper__projects__inner ">
            <h4>Independent Coffee </h4>
            <h2>A boutique coffee shop in the heart of Shoreditch</h2>
            <div className="main__wrapper__projects__inner__popup">
              <h3>Visit Project</h3>
            </div>
          </PhotoDiv4>
        </Link>
        <Link to="/projects/independent-coffee" className="grid-5">
          <PhotoDiv4 className="main__wrapper__projects__inner ">
            <h4>Independent Coffee </h4>
            <h2>A boutique coffee shop in the heart of Shoreditch</h2>
            <div className="main__wrapper__projects__inner__popup">
              <h3>Visit Project</h3>
            </div>
          </PhotoDiv4>
        </Link>
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
