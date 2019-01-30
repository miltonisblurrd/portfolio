import React from 'react'
import homepage from '../images/bindshome.gif'
import blindswhole from '../images/blindsWhole.png'
import blindlap from '../images/laptopBlinds.png'
import Layout from '../components/layout'
import SEO from '../components/seo'
import './page3.css'
import InfoGroup from '../components/InfoGroup/InfoGroup';

const BlindsPage = () => (
  <Layout>
    <SEO title="Blinds Page" />
    <div className="wholeBlinds">
    <div className="BlindsLogo">
    <img src={require('../images/BP-Logo.png')} width="300" />
    </div>

    <div className="BlindSummary">
      <p>My role in this Position is to Enhance Traffic, Sales, and Loyal Customers for a Medium-Large E-Commerce site called <a href="https://blindparts.com/index/">Blindparts.com</a>. With that being said, I not only took the time to research how I was going to drive this site analytically, but I took the time to research how to Redesign the site centered around the User. Take a look at my <a href="http://www.blinddistributors.com/">BEFORE</a> & <a href="https://blindparts.com/index/">AFTER</a>  Results with Blinds USA.</p>
      </div>

    <div className="blindsLaptop">
            <img src={blindlap} atl="Home Page Gif"
            />
        </div>
    
    <div className="Info">
        <div className="GroupInfo">
            <InfoGroup 
            title="Research goals"
            text="The main Goal is to build loyal customers and bring in more traffic. I looked into the sites traffic and analytics & figured out where users were most likely to be directed to, what pages they frequently visited, and how long customers stayed on a specific page."
            image={require('../images/search.gif')}/>
            <InfoGroup 
            title="Problem Analysis"
            text="Simple yet Functional. Up to date Design Trends. Engaging. Convenient."
            image={require('../images/notePad.gif')}/>

            <h2 className="headerSub"> Design Breakdown </h2>

            <InfoGroup 
            title="Purpose"
            text="The main Goal for this job was to increase the Engagement and keep it as Simple and Effective as possible."
            image={require('../images/gage.gif')}/>
            <InfoGroup 
            title="Accessability"
            text="When researching and putting my ideas together I realized older people were more likely to come across this site due to the fact that Adults & Parents are likely to own a home or business. I had to take into consideration that it had to be simple enough for a less tech savvy person so they could complete a purchase no problem."
            image={require('../images/shoppingCart.gif')}/>
            <InfoGroup 
            title="Aesthetic"
            text="The Aesthetic Usability makes it easier for users to handle and assure them they can handle the app with no confusion. I designed the site to be heavy on visuals especially Photos that way it makes it easier for people to find and have an idea what it is Visually. One less obstacle to converting a purchase."
            image={require('../images/imageSlide.gif')}/>
            <InfoGroup 
            title="Color"
            text="The Color way was simple. The Company name is Blinds USA, so I implemented Red, White, and Blue the best way. White being the background that way everything is visible and easy to read. Blue to highlight tabs, and help guide the user. And red to highlight certain texts or hyperlinks."
            image={require('../images/colorSwatch.gif')}/>

            <h2 className="headerSub"> Landing Page </h2>
        <div className="homePage">
            <img src={homepage} atl="Home Page Gif"
            />
        </div>
        <div className="blindsWhole">
            <img src={blindswhole} atl="whole"
            />
        </div>

        <div className="BlindsLogo">
            <img src={require('../images/BP-Logo.png')} width="300" />
            </div>

          </div>
        </div> 
    </div>
  </Layout>

)


export default BlindsPage