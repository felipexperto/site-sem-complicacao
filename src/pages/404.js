import React, { Fragment } from "react"
import { graphql } from "gatsby"

import App from "src/components/layout/app"
import SEO from "src/components/layout/seo"

class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Fragment>
        <App location={this.props.location} title={siteTitle}>
          <SEO title="404: Não encontrado" />
          <h1>Oops!</h1>
          <p>Essa página não foi encontrada.</p>
        </App>
      </Fragment>
    )
  }
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
