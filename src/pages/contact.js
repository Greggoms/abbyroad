import * as React from "react"
import Seo from "../components/seo"
import { ContactForm } from "../components/ContactForm"
import { ContactPageContainer } from "../elements/ContactPageElements"

const contact = () => (
  <>
    <Seo title="Contact" />
    <ContactPageContainer>
      <h1>Contact Us</h1>
      <ContactForm />
    </ContactPageContainer>
  </>
)

export default contact
