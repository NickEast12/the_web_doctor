import React from "react"
import Projects from "../../components/projects"

import headImg from "../../images/beach1.jpg"
import projectImg from "../../images/beachMockup.png"
import lowerImg from "../../images/beach2.jpg"

const headerImage = `${headImg}`
const name = "Luxury Island"
const subTitle =
  "This is a luxury island retreat, set in a remote marine-protected area of the Maldives."
const des =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit fermentum velit, id auctor ipsum vestibulum id. Nulla vestibulum varius velit, id ornare enim consequat non. Sed pharetra ullamcorper nisl et ornare. "
const skills = "Design, Development, SEO, CMS "
const projectImage = `${projectImg}`
const lowerImage = `${lowerImg}`
const quote =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit fermentum velit, id auctor ipsum vestibulum id. Nulla vestibulum varius velit, id ornare enim consequat non "
const author = "Nick East | VP of Sales"

const luxuryIsland = () => {
  return (
    <Projects
      title="Luxury Island"
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

export default luxuryIsland
