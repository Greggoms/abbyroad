import styled from "styled-components"
import { animated } from "@react-spring/web"

export const BlogPageContainer = styled(animated.section)`
  grid-column: 2 / span 6;
  margin: 30px 0;

  .posts-list {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  .post {
    display: flex;
    flex-direction: column;

    a,
    a:link,
    a:visited {
      color: ${props => props.theme.colors.linkDark};
      width: fit-content;
    }

    a:hover {
      color: rebeccapurple;
    }

    a:active {
      color: ${props => props.theme.colors.green};
    }
  }

  .back-to-posts,
  .back-to-posts:link,
  .back-to-posts:visited {
    color: ${props => props.theme.colors.linkDark};
    text-decoration: none;
  }
  .back-to-posts:hover {
    color: rebeccapurple;
  }

  .back-to-posts:active {
    color: ${props => props.theme.colors.green};
  }

  h1,
  h2 {
    margin: 10px 0 5px 0;
  }

  .date-time {
    margin: 0;
  }

  .excerpt {
    margin: 0;
    margin-top: 10px;
  }

  .mdx-content {
    .gatsby-resp-image-link {
    }

    .gatsby-resp-image-image {
      height: fit-content !important;
      max-width: 100%;
      // margin: calc(23vw - 50%) 0 !important;
      @media ${props => props.theme.breakpoints.tablet} {
        margin: 0 !important;
      }
    }

    .gatsby-resp-image-background-image {
      max-height: ${process.env.GATSBY_BLOG_IMAGE_HEIGHT};
      background-size: contain !important;
    }

    ul {
      margin: -25px 0 20px 50px;
    }
  }

  hr {
    margin-top: 40px;
    width: 100%;
    max-width: 50%;
    align-self: center;
  }

  @media ${props => props.theme.breakpoints.mobile} {
    grid-column: 2 / span 6;
  }
`
