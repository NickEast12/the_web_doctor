import React from "react"

import Layout2 from "../components/layout2"
import SEO from "../components/seo"

const Projects = props => {
  return (
    <Layout2>
      <SEO title={props.title} />
      <div className="projects__wrapper">
        <div className="projects__wrapper__header">
          <img src={props.Headerimage} alt="header" />
        </div>
        <div className="projects__wrapper__content">
          <div className="projects__wrapper__content__info">
            <h1>{props.Projectname}</h1>
            <h2>{props.Projectsubtitle}</h2>
            <p>{props.Projectdescription}</p>
            <div className="projects__wrapper__content__info__skills">
              <h4>What we did</h4>
              <h6>{props.Skills}</h6>
            </div>
            <div className="projects__wrapper__content__info__btn">
              <button>Vist Website</button>
            </div>
          </div>
          <div className="projects__wrapper__content__img">
            <img src={props.Contentimage} alt="project" />
          </div>
        </div>
        <div className="projects__wrapper__img">
          <img src={props.Lowerimage} alt="projects" />
        </div>
        <div className="projects__wrapper__quote">
          <div className="projects__wrapper__quote__inner">
            <i>&ldquo;</i>
            <h5>{props.Quote}</h5>
            <hr />
            <p>{props.Author}</p>
          </div>
        </div>
      </div>
    </Layout2>
  )
}

export default Projects
