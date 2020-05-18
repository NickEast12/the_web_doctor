import React from "react"
import Projects from "../../components/projects"

import headImg from "../../images/adv2.jpg"
import projectImg from "../../images/advMockup.png"
import lowerImg from "../../images/adv5.jpg"

const headerImage = `${headImg}`
const name = "Adventure Hiking"
const subTitle =
  "Set off into the mountians of Canada and explore a wide range of hiking paths."
const des =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit fermentum velit, id auctor ipsum vestibulum id. Nulla vestibulum varius velit, id ornare enim consequat non. Sed pharetra ullamcorper nisl et ornare. "
const skills = "Design, Development, SEO, CMS "
const projectImage = `${projectImg}`
const lowerImage = `${lowerImg}`
const quote =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit fermentum velit, id auctor ipsum vestibulum id. Nulla vestibulum varius velit, id ornare enim consequat non "
const author = "Nick East | CEO of Adventure Hiking"

const AdventureHiking = () => {
  return (
    <Projects
      title="Adventure Hiking"
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

export default AdventureHiking
