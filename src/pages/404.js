import React from "react"
import { graphql, Link } from "gatsby"
import Seo from "../components/seo"
import { NotFoundContainer } from "../css"

export const query = graphql`
  query {
    allSitePage {
      distinct(field: path)
    }
  }
`

const NotFoundPage = ({ data }) => {
  const filterItems = (arr, query) => {
    return arr.filter(
      el => el.toLowerCase().indexOf(query.toLowerCase()) !== -1
    )
  }

  return (
    <NotFoundContainer>
      <Seo title="404: Not found" />
      <h1>404: Not Found</h1>
      <p>
        You just hit a route that doesn&#39;t exist... the sadness. Use one of
        the links below to get back on track!
      </p>
      <div className="link-sections">
        <Link to="/">/home/</Link>
        <section className="location-links">
          {filterItems(data.allSitePage.distinct, "/location").map(link => (
            <Link key={link} to={link}>
              {link}
            </Link>
          ))}
        </section>
        <section className="blog-links">
          {filterItems(data.allSitePage.distinct, "/blog").map(link => (
            <Link key={link} to={link}>
              {link}
            </Link>
          ))}
        </section>
        <Link to="/about">/about/</Link>
        <Link to="/contact">/contact/</Link>
      </div>
    </NotFoundContainer>
  )
}

export default NotFoundPage
