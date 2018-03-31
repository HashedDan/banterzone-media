import React from 'react'
import Link from 'gatsby-link'

const Header = (props) => (
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0, display: 'inline' }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {props.data.site.siteMetadata.title}
        </Link>
      </h1>
      <h4 style={{ display: 'inline', float: 'right' }}>
      <Link
          to="/posts/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Posts
        </Link>
        </h4>
    </div>
  </div>
)

export default Header
