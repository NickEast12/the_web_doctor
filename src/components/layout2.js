import React from "react"

import AltHeader from "./altHeader"
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
