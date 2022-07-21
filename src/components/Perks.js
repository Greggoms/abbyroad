import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { useSpring, animated } from "@react-spring/web"
import { PerksContainer } from "../css"

export const Perks = () => {
  const { number } = useSpring({
    from: { number: 0 },
    number: 7,
    config: {
      duration: 1500,
    },
  })
  return (
    <PerksContainer>
      <div className="perks">
        <div className="perk">
          <div className="background background-one"></div>
          <div className="perk-content">
            <h2>AppCard Rewards</h2>
            <div className="appcard">
              <p>
                Gain points with each purchase and use them for discounts! Give
                us your phone number during checkout to activate your account.
                Then click the AppCard picture to download the app and keep
                track of your purchases, points, and coupons!
              </p>
              <a
                href="https://appcard.com/for-members/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <StaticImage
                  src="../images/appcard-logo.png"
                  alt="AppCard Logo"
                  placeholder="blurred"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="perk">
          <div className="background background-two"></div>
          <div className="perk-content">
            <div className="special-h2">
              <animated.h2>
                {number.to(n => Math.floor(n.toFixed(2)))}
              </animated.h2>
              <h2 style={{ marginLeft: "5px" }}>Locations!</h2>
            </div>
            <p>
              Abby Road is constantly expanding! We've been working hard to open
              various locations so you can shop for all of your favorite smoke
              sesh gear near and far!
            </p>
            <Link to="/locations">Take a Look!</Link>
          </div>
        </div>
      </div>
    </PerksContainer>
  )
}
