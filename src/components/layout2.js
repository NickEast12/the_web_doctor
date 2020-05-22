/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import AltHeader from "./altheader"
import Footer from "./footer"
import "./layout.css"

const Layout2 = ({ children }, props) => {
  return (
    <>
      <AltHeader />
      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout2
