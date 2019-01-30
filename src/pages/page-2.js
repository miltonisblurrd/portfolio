import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Card from '../components/Card';
import './page2.css'


const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
      <div className="Cards">
      <h2>Check out some of my Projects below!</h2>
          <div className="CardGroup">
          
            <Card 
            title="Blinds USA"
            text="E-Commerce"
            image={require('../images/blindsThumbnail.png')}/>
            <Link className="breakdown" to="/page3/">View Breakdown</Link>
           
            <Card 
            title="Pizza Go"
            text="E-Commerce"
            image={require('../images/pizzaThumbnail.png')}/>
            <Link className="breakdown" to="/page4/">View Breakdown</Link>

            <Card 
            title="TicketSurf"
            text="Mobile App"
            image={require('../images/surfThumbnail.png')}/>
            <Link className="breakdown" to="/page5/">View Breakdown</Link>

          </div>
      </div>
   
  </Layout>

)


export default SecondPage
