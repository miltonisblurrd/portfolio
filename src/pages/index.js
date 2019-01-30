import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Main from '../components/Form/Form.js';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <div className="textGroup">
          <h1>- about</h1>
          <p>Self Taught Front End Developer based in Las Vegas.</p>
          <p>Creater of <a href="https://www.instagram.com/ticketsurf/">@ticketsurf</a>, sign up for the Beta <a href="https://ticketsurf.io/">here.</a></p>
          <p>I enjoy making Websites with <a href="https://www.gatsbyjs.org/">Gatsby.js</a>, <a href="https://www.contentful.com/">Contentful</a>,<br /><a href="https://formspree.io/#setup">Formspree</a>, & <a href="https://www.netlify.com/">Netlify</a>. </p>
          <p> I also like to make E-Commerce websites for businesses using <a href="https://www.shopify.com/">Shopify</a>. </p>
          <p>Languages I'm familiar with:<br /><b>HTML5</b>, <b>CSS3</b>, <b>JavaScript</b>, <b>English</b>, & <b>Sarcasm</b>. </p>
          <p>Inspired by many things, specifically Photography,<br />Music, & Skateboarding.</p>
          <p>I'm always up to something, why not stay updated?</p>
          <p>-> <a href="www.linkedin.com/in/miltonamaya">LinkedIn</a> <a href="https://www.instagram.com/miltonisblurrd/">Instagram</a> <a href="https://github.com/miltonisblurrd">Github</a></p>
         
          <p>Checkout some of my FrontEnd work <Link to="/page-2/">here.</Link> </p>
          
      
          <Main name="contactForm"/>
       </div>
  </Layout>
)

export default IndexPage
