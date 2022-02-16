import * as React from "react"
import Seo from "../components/seo"
import { AboutPageContainer } from "../elements/AboutPageElements"

const about = () => (
  <>
    <Seo title="About" />
    <AboutPageContainer>
      <h1>About Us</h1>
      <p>
        We specialize in the smoke shop area, carrying everything you need to
        start your dream setup. If you prefer the old-school style, we have a
        wide assortment of glass pipes, screens and lighters. If butane torches
        and sticky messes frighten you, don't worry! We have some cool new-age
        tech as well!
      </p>
      <p>
        Our many locations are run by fellow smoke-enthusiasts who strive to
        deliver a satisfying, friendly, and knowledgeable experience. This is a
        constantly evolving industry with new inventions and cool improvements
        always hitting the shelves. Feel free to ask questions. They are sure to
        guide you to your next amazing piece!
      </p>
      <p>
        We gather product from all over the globe, but we take pride in the
        works of local glass artists. They have a way of adding a unique twist
        that you can't find anywhere else! Some works are incredibly complex and
        beautiful, while others can be considered more simplistic and practical.
        There is definitely a piece for everyone!
      </p>
    </AboutPageContainer>
  </>
)

export default about
