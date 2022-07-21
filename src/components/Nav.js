import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { Transition, config, animated } from "@react-spring/web"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse } from "@fortawesome/free-solid-svg-icons"
import { Navbar, NavLinks } from "../css"

export const Nav = () => {
  const [offset, setOffset] = useState(0)
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset)
    // clean up code
    window.removeEventListener("scroll", onScroll)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    offset >= 55 ? setShow(true) : setShow(false)
  }, [offset])

  return (
    <Navbar>
      <div className="nav-content">
        <Transition
          items={show}
          from={{ transform: "translateY(-70%)", opacity: 0 }}
          enter={{ transform: "translateY(0)", opacity: 1, flex: 1 }}
          leave={{ transform: "translateY(-70%)", opacity: 0, flex: 0 }}
          reset={!show && true}
          reverse={show}
          config={config.gentle}
        >
          {(styles, item) =>
            item && (
              <animated.div style={styles} className="svg-link">
                <Link to="/">
                  <FontAwesomeIcon icon={faHouse} />
                </Link>
              </animated.div>
            )
          }
        </Transition>
        <NavLinks>
          <Link to="/locations" activeStyle={{ textDecoration: "underline" }}>
            Locations
          </Link>
          <Link to="/blog" activeStyle={{ textDecoration: "underline" }}>
            Blog
          </Link>
          <Link to="/about" activeStyle={{ textDecoration: "underline" }}>
            About
          </Link>
          <Link to="/contact" activeStyle={{ textDecoration: "underline" }}>
            Contact
          </Link>
        </NavLinks>
      </div>
    </Navbar>
  )
}
