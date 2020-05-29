import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import styled from "styled-components"

const StyledBurger = styled.div`
  width: 2rem;
  height: 1.75em;
  margin-top: -0.4rem;
  display: flex;
  justify-content: space-evenly;
  flex-flow: column nowrap;
  position: relative;
  div {
    width: 1.5rem;
    height: 0.21rem;
    background-color: #049a9e;
    transform-origin: 0.5px;
    transition: all 0.35s ease;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`
const StyledMenu = styled.div`
  transition: all .35s ease;  
  left: 0;
  height: ${({ open }) => (open ? "100%" : "0")};
  // display:  ${({ open }) => (open ? "block" : "none")};
  max-height: ${({ open }) => (open ? "15rem" : "0")};
  top: 3rem;
  background: #049a9e;
  width: 100%;
  
  z-index: 10;
  ul {
    list-style: none;
    transition: all .35s ease;
    li {
      text-align: center;
      transition: all .35s ease;
      padding: 0.75rem 0;
      color: #fff;
      border-bottom: solid #dadada 1px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 2px;
      font-size: 0.9rem;
    }
  }
`

const Header = ({ siteTitle }) => {
  const [open, setOpen] = useState(false)
  return (
    <header>
      <div className="header__wrapper">
        <div className="header__wrapper__logo">
          <Link to="/">
            <h2>THE WEB DOCTOR</h2>
          </Link>
        </div>
        <div className="header__wrapper__ham">
          <StyledBurger open={open} onClick={() => setOpen(!open)}>
            <div></div>
            <div></div>
            <div></div>
          </StyledBurger>
        </div>
        <div className="header__wrapper__desktop">
          <ul>
            <Link to="/what-we-do/">
              <li>What we do</li>
            </Link>
            <Link to="/our-work">
              <li>Our Work</li>
            </Link>
            <Link to="/news">
              <li>News & Blog</li>
            </Link>
            <Link to="/contact-us/">
              <li>Contact Us</li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="mobile__menu">
        <StyledMenu open={open}>
          <ul>
            <Link to="/what-we-do/">
              <li>What we do</li>
            </Link>
            <Link to="/our-work">
              <li>Our Work</li>
            </Link>
            <Link to="/news">
              <li>News & Blog</li>
            </Link>
            <Link to="/contact-us/">
              <li>Contact Us</li>
            </Link>
          </ul>
        </StyledMenu>
      </div>
    </header>
  )
}

// const Header = ({ siteTitle }) => (

// );

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
