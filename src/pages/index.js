import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import OneRing from "../components/onering"
import Philippe from "../components/philippe"

const IndexPage = (location) => {

  return (
    <Layout>
    <div className="card">
      <div className="back">
        <Image />
        <OneRing />
      </div>
      <div className="front">
        <div className="border" />
        <div className="cover-shape-large">
          <Philippe />
        </div>

        <div className="cover-shape-small">       
          <h1>Joyeux Noël</h1>
          <p><b>Philippe</b></p> 
        </div>
      </div>
      
      <div className="text-container">    
        <p>He sees you when you're sleeping.</p>
        <p>He knows when you're awake.</p>
        <p></p>
        <p>-Félix</p>
      </div>
    </div>
  </Layout>
  )
}

export default IndexPage
