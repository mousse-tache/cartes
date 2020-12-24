import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Coop from "../components/coop"

const IndexPage = (location) => {

  return (
    <Layout>
    <div className="card">
      <div className="back">
      </div>
      <div className="front">
          <Coop />
        <div className="cover-shape-large">
        
        </div>

        <div className="cover-shape-small">       
            
        </div>
      </div>
      
      <div className="text-container">    
        
      </div>
    </div>
  </Layout>
  )
}

export default IndexPage