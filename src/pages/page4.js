import React from 'react'
import homepage from '../images/pizzaGo.gif'
import pizzawhole from '../images/pizzaGoOfficial.jpg'
import pizzacomp from '../images/macIpadMobile.png'
import Layout from '../components/layout'
import SEO from '../components/seo'
import './page4.css'
import InfoGroup from '../components/InfoGroup/InfoGroup'

const PizzaGo = () => (
  <Layout>
    <SEO title="PizzaGo Page" />
    <div className="wholePizza">
      <div className="pizzaGoLogo">
        <img src={require('../images/pizzaLogo.png')} width="300" />
      </div>

      <div className="pizzaGoSummary">
        <p>
          My Role for this project was to Design and Develop an E-Commerce
          Static Site for a Medium sized business in Las Vegas that allowed
          customers to order Pizza, Ribs, and other great foods for delivery.
          Customers also have the ability to Create Accounts and Log in to save
          information from previous orders.
        </p>
      </div>

      <h2 className="headerSub">
        {' '}
        Tools I used to Design <br /> & begin bringing this to Life?{' '}
      </h2>

      <div className="pizzaGoSummary">
        <p>
          I used <a href="https://www.sketchapp.com/">Sketch</a> to Design my
          UI. <a href="https://zeplin.io/">Zeplin</a> to export my assets with
          styleguides, accurate specs, assets, & code snippets.
          <br />
          With <a href="https://reactjs.org/">React.js</a> I used{' '}
          <a href="https://www.gatsbyjs.org/">Gatsby.js</a> as my Static Site
          framework. <a href="https://www.contentful.com/">Contenful</a> as my
          CMS. <a href="https://moltin.com/">Moltin E-Commerce</a> API.{' '}
          <a href="https://stripe.com/">Stripe</a> for my secured payments.
          Deploying this site via <a href="https://www.netlify.com/">Netlify</a>
          .
        </p>
      </div>

      <div className="pizzaGoComp">
        <img src={pizzacomp} atl="Home Page Gif" />
      </div>

      <div className="Info">
        <div className="GroupInfo">
          <InfoGroup
            title="Research goals"
            text="Before moving a pixel I researched other Pizza websites and took notes on my experience with those apps.  Gathering info that I felt could make the Pizza & Go more efficient. "
            image={require('../images/search.gif')}
          />
          <InfoGroup
            title="Target Audience"
            text="This question wasn’t Rocket Science. Who doesn’t eat Pizza, and who doesn’t want to have to leave their home to get Pizza?"
            image={require('../images/target.gif')}
          />
          <InfoGroup
            title="Problem Analysis"
            text="After doing my research I realized the three BIG problems I knew I had to make sure were taken care of in order for this Site to flourish: Fast Load Time, Safe & Secure, and a Quick & Simple check out"
            image={require('../images/lamp.gif')}
          />

          <h2 className="headerSub"> Design Breakdown </h2>

          <InfoGroup
            title="Purpose"
            text="The purpose of creating this was to create a incredibly fast E-commerce Static Site that not only exceeded optimization, but wasn’t over whelming when it came to content and Design."
            image={require('../images/rocket.gif')}
          />
          <InfoGroup
            title="Accessability"
            text="When it comes to buying food online it really comes down to how quick the Customer can find what they want and order it with no step by step process. Creating a seamless check out is the focus when discussing Accessibility for Pizza & Go. Another Focus is making sure the Site is just as affective on Web as it is on Mobile."
            image={require('../images/creditCard.gif')}
          />
          <InfoGroup
            title="Color"
            text="When it came down to the color scheme it was really simple. The site had to make an obvious point that, yes indeed, this is a Pizza Shop. So to portray that I used Yellow and Red to give the user a Pizza shop feel when ordering food. "
            image={require('../images/colorSwatch.gif')}
          />

          <h2 className="headerSub"> Pizza Go Landing Page </h2>
          <div className="pizzaHomePage">
            <img src={homepage} atl="Home Page Gif" />
          </div>
          <div className="pizzaWhole">
            <img src={pizzawhole} atl="whole" />
          </div>

          <div className="pizzaGoLogo">
            <img src={require('../images/pizzaLogo.png')} width="300" />
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default PizzaGo
