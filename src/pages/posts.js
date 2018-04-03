import React from 'react'
import Link from "gatsby-link"
import { Label } from 'semantic-ui-react'

const PostsPage = ({ data }) => (
    <div>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
            <div key={node.id}>
                <h3>
                    <Link
                        to={node.fields.slug}
                        css={{ textDecoration: `none`, color: `inherit` }}
                    >
                        {node.frontmatter.title}
                    </Link>
                    {" "}
                    <span color="#BBB">— {node.frontmatter.date}</span>
                    <Label as="a">{node.frontmatter.category}</Label>
                </h3>
                <p>{node.excerpt}</p>
                <br/>
            </div>
        ))}
    </div>
)

export default PostsPage

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            category
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;
