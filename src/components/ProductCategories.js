import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Zoom from "react-medium-image-zoom"
import { InventoryContainer } from "../elements"
import { Link } from "gatsby"

export const ProductCategories = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: { sourceInstanceName: { eq: "products" } }
        sort: { order: ASC, fields: name }
      ) {
        edges {
          node {
            name
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
            }
          }
        }
      }
    }
  `)
  return (
    <InventoryContainer>
      <div className="inventory-content">
        <h2>Product Categories</h2>
        <p>
          We take pride in our selection. We work closely with distributors and
          local glass artists to provide the best pricing and most unique
          pieces.
        </p>
        <p className="disclaimer">
          These pictures illustrate the category and do not reflect what's in
          stock.
        </p>

        <div className="categories">
          {data.allFile.edges.map(item => (
            <div key={item.node.name} className="category-item">
              <Zoom>
                <GatsbyImage
                  image={item.node.childImageSharp.gatsbyImageData}
                  alt={item.node.name}
                />
              </Zoom>
              <h3>{item.node.name}</h3>
            </div>
          ))}
        </div>

        <h2 style={{ textAlign: "center", margin: "50px 0" }}>
          Visit one of our <Link to="/locations">locations</Link> to see more!
        </h2>
      </div>
    </InventoryContainer>
  )
}
