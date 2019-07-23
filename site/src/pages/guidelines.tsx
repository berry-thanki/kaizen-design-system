import * as React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"

export default ({ data, location }) => {
  const { edges } = data.allMarkdownRemark

  return (
    <Layout pageTitle="Guidelines" currentPath={location.pathname}>
      <h1>Guidelines page</h1>

      <ul>
        {edges.map(
          node =>
            node!.node!.fields!.slug! && (
              <li>
                <Link to={node.node.fields.slug}>
                  {node.node.frontmatter.title}
                </Link>
              </li>
            )
        )}
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fields: { slug: { regex: "^/guidelines/" } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`