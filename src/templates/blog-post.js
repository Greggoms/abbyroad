import React from "react"
import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { useSpring, easings } from "@react-spring/web"
import Seo from "../components/seo"
import { BlogPageContainer } from "../elements"

export const query = graphql`
  query ($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "MMM Do YYYY")
      }
      timeToRead
      body
    }
  }
`

const BlogPost = props => {
  const animationProps = useSpring({
    to: { transform: "translateY(0)", opacity: 1 },
    from: { transform: "translateY(2%)", opacity: 0 },
    config: {
      duration: 800,
      easing: easings.easeOutExpo,
    },
  })
  const frontmatter = props.data.mdx.frontmatter
  return (
    <BlogPageContainer style={animationProps}>
      <Seo title={frontmatter.title} />
      <Link to="/blog" className="back-to-posts">
        &#x2190; Back to Posts
      </Link>
      <h1>{frontmatter.title}</h1>
      <p>
        {frontmatter.date} - {props.data.mdx.timeToRead}min read
      </p>
      <MDXRenderer>{props.data.mdx.body}</MDXRenderer>
    </BlogPageContainer>
  )
}

export default BlogPost
