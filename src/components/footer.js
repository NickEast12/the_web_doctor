import React from "react"
import TwitterIcon from "../assets/twitter.svg"
import InstagramIcon from "../assets/instagram.svg"
import FacebookIcon from "../assets/facebook.svg"
import LinkedinIcon from "../assets/linkedin.svg"
import PinIcon from "../assets/pin.svg"
import EmailIcon from "../assets/email.svg"
import PhoneIcon from "../assets/phone.svg"

const Footer = () => {
  return (
    <div className="footer__wrapper">
      <div className="footer__wrapper__news">
        <div className="footer__wrapper__news__inner">
          <div className="footer__wrapper__news__inner__title">
            <h4>
              Sign up to our <span>newsletter</span>
            </h4>
            <p>
              just some text that we will yse to fill in the footer and this is
              some enxt news as well
            </p>
          </div>
          <div className="footer__wrapper__news__inner__btn">
            <input type="text" placeholder="Your Email"></input>
            <button>Sign Up!</button>
          </div>
        </div>
      </div>
      <div className="footer__wrapper__lower">
        <div className="footer__wrapper__lower__inner">
          <div className="footer__wrapper__lower__inner__title">
            <h4>Get In Touch</h4>
          </div>
          <div className="footer__wrapper__lower__inner__links">
            <div className="footer__wrapper__lower__inner__links__section">
              <PhoneIcon />
              <p>01737 445113</p>
            </div>
            <div className="footer__wrapper__lower__inner__links__section">
              <EmailIcon />
              <p>contact@thewebdoctor.co.uk</p>
            </div>
            <div className="footer__wrapper__lower__inner__links__section">
              <PinIcon />
              <p>66 High St, Reigate RH2 9AP</p>
            </div>
          </div>
          <div className="footer__wrapper__lower__inner__social">
            <TwitterIcon />
            <InstagramIcon />
            <FacebookIcon />
            <LinkedinIcon />
          </div>
        </div>
      </div>
      <div className="footer__wrapper__legal">
        <p>
          Copyright <span>&copy;</span> The Web Doctor 2020{" "}
        </p>
        <p>
          Terms &amp; Conditions | <span>Cookie Policy</span>
        </p>
      </div>
    </div>
  )
}

export default Footer
