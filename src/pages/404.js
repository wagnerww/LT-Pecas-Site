import React, { Fragment } from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"

const NotFoundPage = () => (
  <Fragment>
    <SEO title="404: Not found" />
    <h1>Página não encontrada</h1>
    <p>
      Continue por <Link to="/">aqui</Link>
    </p>
  </Fragment>
)

export default NotFoundPage
