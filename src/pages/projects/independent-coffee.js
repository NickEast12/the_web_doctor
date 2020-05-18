import React from "react"
import Projects from "../../components/projects"

import headImg from "../../images/coffee3.jpg"
import projectImg from "../../images/coffeeMockup.png"
import lowerImg from "../../images/coffee4.jpg"

const headerImage = `${headImg}`
const name = "Independent Coffee"
const subTitle =
  "Small independent coffee shop based in the heard of Shoreditch."
const des =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit fermentum velit, id auctor ipsum vestibulum id. Nulla vestibulum varius velit, id ornare enim consequat non. Sed pharetra ullamcorper nisl et ornare. "
const skills = "Design, Development, SEO, CMS "
const projectImage = `${projectImg}`
const lowerImage = `${lowerImg}`
const quote =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit fermentum velit, id auctor ipsum vestibulum id. Nulla vestibulum varius velit, id ornare enim consequat non "
const author = "Victoria East | Head Barista"

const Euphoria = () => {
  return (
    <Projects
      title="Independent Coffee"
      Headerimage={headerImage}
      Projectname={name}
      Projectsubtitle={subTitle}
      Projectdescription={des}
      Skills={skills}
      Contentimage={projectImage}
      Lowerimage={lowerImage}
      Quote={quote}
      Author={author}
    />
  )
}

export default Euphoria
