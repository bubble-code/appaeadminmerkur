import React from "react"
import { Link } from "react-router-dom";

const NoMatch = () => {

  return <div>
    <h1>
      NoMatch
    </h1>
    <p>
      <Link to="/" > Volver a Home</Link>
    </p>
  </div>
}

export default NoMatch;