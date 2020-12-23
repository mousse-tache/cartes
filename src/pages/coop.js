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
        <p>Nous vous souhaitons de passer un merveilleux temps des Fêtes, bien emmitouflé dans la chaleur de votre foyer et rempli de l’amour bien réel que l’on vous offre à distance. Au plaisir de vous revoir en 2021,</p>
        <p></p>
        <p>Votre C.A.</p>
      </div>
    </div>
  </Layout>
  )
}

export default IndexPage