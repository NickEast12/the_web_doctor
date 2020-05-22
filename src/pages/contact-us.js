import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Maps from "../components/MapContainer"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact Us" />
    <div className="contact__wrapper">
      <div className="contact__wrapper__header">
        <Maps />
        <h2>Get in touch</h2>
      </div>
      <div className="contact__wrapper__form">
        <div className="contact__wrapper__form__inner">
          <h3>We would love to hear about your project</h3>
          <form>
            <div className="contact__wrapper__form__inner__boxes cGrid1">
              <p>
                Name <span>*</span>
              </p>
              <input type="text" />
            </div>
            <div className="contact__wrapper__form__inner__boxes cGrid2">
              <p>
                Email <span>*</span>
              </p>
              <input type="text" />
            </div>
            <div className="contact__wrapper__form__inner__boxes cGrid3">
              <p>
                Company Name <span>*</span>
              </p>
              <input type="text" />
            </div>
            <div className="contact__wrapper__form__inner__boxes cGrid4">
              <p>
                Phone Number <span>*</span>
              </p>
              <input type="text" />
            </div>
            <div className="contact__wrapper__form__inner__boxes cGrid5">
              <p>
                Enquiry <span>*</span>
              </p>
              <textarea></textarea>
            </div>
            <div className="contact__wrapper__form__inner__btn cGrid6">
              <button>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </Layout>
)

export default ContactPage
