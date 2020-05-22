import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

import Headertitle from "../components/header-title"
import Island from "../images/islandP1.jpg"
import Adventure from "../images/adv1.jpg"
import Festival from "../images/boom4.jpg"
import Coffee from "../images/coffee1.jpg"
import Car from "../images/tesla.jpg"
import Villa from "../images/villa.jpg"
const ImageBoxes = styled.div``

const Box1 = styled.div`
  background-image: url(${Island});
`
const Box2 = styled.div`
  background-image: url(${Adventure});
`
const Box3 = styled.div`
  background-image: url(${Festival});
`
const Box4 = styled.div`
  background-image: url(${Coffee});
`
const Box5 = styled.div`
  background-image: url(${Car});
`
const Box6 = styled.div`
  background-image: url(${Villa});
`

const ContactPage = () => (
  <Layout>
    <SEO title="Our work " />
    <div className="work__wrapper">
      <Headertitle title="We ensure all we do had" span=" form & function" />
      <ImageBoxes className="work__wrapper__lower">
        <Link to="/projects/luxury-island" className="pGrid1">
          <Box1 className="work__wrapper__lower__boxes">
            <h4>Luxury Island</h4>
          </Box1>
        </Link>
        <Link to="/projects/adventure-hiking" className="pGrid2">
          <Box2 className="work__wrapper__lower__boxes">
            <h4>Adventure Hiking</h4>
          </Box2>
        </Link>
        <Link to="/projects/euphoria-festival" className="pGrid3">
          <Box3 className="work__wrapper__lower__boxes">
            <h4>Euphoria Festival</h4>
          </Box3>
        </Link>
        <Link to="/projects/independent-coffee" className="pGrid4">
          <Box4 className="work__wrapper__lower__boxes">
            <h4>Independent Coffee</h4>
          </Box4>
        </Link>
        <Link to="/" className="pGrid5">
          <Box5 className="work__wrapper__lower__boxes">
            <h4>ALSET</h4>
          </Box5>
        </Link>
        <Link to="/" className="pGrid6">
          <Box6 className="work__wrapper__lower__boxes">
            <h4>Prime Villas</h4>
          </Box6>
        </Link>
      </ImageBoxes>
    </div>
  </Layout>
)

export default ContactPage
