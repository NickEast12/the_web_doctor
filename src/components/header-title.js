import React from "react"

const Headertitle = props => {
  return (
    <div className={props.reset || "main__header__wrapper"}>
      <h1>
        {props.title}
        <span>{props.span}</span>
      </h1>
    </div>
  )
}

export default Headertitle
