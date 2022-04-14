import React, { useState } from "react"

export const Li = props => {
  const [active, setActive] = useState(false)

  return (
    <li>
      <button
        id={props.id}
        onClick={e => {
          props.handleScrollTo(props.id)
          setActive(!active)
        }}
        style={
          active ? { textDecoration: "underline" } : { textDecoration: "none" }
        }
      >
        {props.name}
      </button>
    </li>
  )
}
