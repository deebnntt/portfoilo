import React from "react"
import Link from "gatsby-link"

const ListLink = props =>
  <li style={{ display: `table-cell`,
textAlign: `center`, display: `inline-block`, width: `33%`, float: `left` }}>
    <Link to={props.to}>
      {props.children}
    </Link>
  </li>

export default ({ children }) =>
  <div style={{ width: `100%`, margin: `auto`, padding: `1.25rem 1rem` }}>
    <header style={{ marginBottom: `1.5rem`, display: `table`, width: `95%`, position: `fixed` }}>
      <ul style={{ listStyle: `none`, width: `100%`, margin: `auto`, display: `table-row` }}>
        <ListLink to="/about">WORK</ListLink>
        <ListLink to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
          <h1 style={{ display: `inline` }}>db</h1>
        </ListLink>
        <ListLink to="/contact/">CONTACT</ListLink>
      </ul>
    </header>
    <div style={{ width: `80%`, marginTop: `3.5rem`, marginLeft: `auto`, marginRight: `auto` }}>
    {children()}
    </div>
  </div>
