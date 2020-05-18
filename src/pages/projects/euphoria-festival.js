import React from "react"
import Projects from "../../components/projects"

import headImg from "../../images/boom2.jpg"
import projectImg from "../../images/boomMockup.png"
import lowerImg from "../../images/boom3.jpg"

const headerImage = `${headImg}`
const name = "Euphoria Festival"
const subTitle = "Euphoria is one of the UKs largest festivals."
const des =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit fermentum velit, id auctor ipsum vestibulum id. Nulla vestibulum varius velit, id ornare enim consequat non. Sed pharetra ullamcorper nisl et ornare. "
const skills = "Design, Development, SEO, CMS "
const projectImage = `${projectImg}`
const lowerImage = `${lowerImg}`
const quote =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit fermentum velit, id auctor ipsum vestibulum id. Nulla vestibulum varius velit, id ornare enim consequat non "
const author = "Rebecca East | Director"

const Euphoria = () => {
  return (
    <Projects
      title="Euphoria Festival"
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
