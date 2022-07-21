import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Seo from "../components/seo"
import { BlogPageContainer } from "../css"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: { order: ASC, fields: frontmatter___slug }) {
        edges {
          node {
            frontmatter {
              title
              date(formatString: "MMM Do YYYY")
            }
            fields {
              slug
            }
            excerpt
            timeToRead
          }
        }
      }
    }
  `)

  return (
    <BlogPageContainer>
      <Seo title="Blog" />
      <div className="posts-list">
        {data.allMdx.edges.map((edge, index) => {
          return (
            <div key={edge.node.fields.slug} className="post">
              <>
                <Link to={`/blog/${edge.node.fields.slug}`}>
                  <h2>{edge.node.frontmatter.title}</h2>
                </Link>
                <p className="date-time">
                  {edge.node.frontmatter.date} - {edge.node.timeToRead}min read
                </p>
                <p className="excerpt">{edge.node.excerpt}</p>
              </>
              {index < data.allMdx.edges.length - 1 && <hr />}
            </div>
          )
        })}
      </div>
    </BlogPageContainer>
  )
}

export default BlogPage
