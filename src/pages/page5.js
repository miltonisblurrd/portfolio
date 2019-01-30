import React from 'react'
import homepage from '../images/surfThumbnail.png'
import surfwhole from '../images/surfPrototype.gif'
import ticketsurfcomp from '../images/ticketSurfComp.png'
import Layout from '../components/layout'
import SEO from '../components/seo'
import './page5.css'
import InfoGroup from '../components/InfoGroup/InfoGroup';

const TicketSurf = () => (
  <Layout>
    <SEO title="TicketSurf Page" />
    <div className="wholeSurf">
    <div className="ticketSurfLogo">
    <img src={require('../images/ticketSurfLogo.png')} width="300" />
    </div>

    <div className="ticketSurfSummary">
      <p>My role for this position was to Design the UX/UI for this mobile app called <a href="https://www.instagram.com/ticketsurf/">TicketSurf</a>. Bringing this to life was something I was very proud to do. Check out the process below on how I started and finished this Design. Sign up for the BETA <a href="https://ticketsurf.io/">here.</a> </p>
      </div>

    <div className="ticketSurfComp">
            <img src={ticketsurfcomp} atl="Home Page Gif"
            />
        </div>
    


    <div className="Info">
        <div className="GroupInfo">
            <InfoGroup 
            title="Research goals"
            text="The main Goal is to bridge the gap between Tickets and Users. Providing a marketplace for users to safely sell and find tickets sold in your area. Contacting people via Social Media can be sketch and the TicketSurf marketplace eliminates that factor."
            image={require('../images/messages.gif')}/>
            <InfoGroup 
            title="Problem Analysis"
            text="After doing my research I realized the three BIG problems I knew I had to make sure were taken care of in order for this Site to flourish: Fast Load Time, Safe & Secure, and a Quick & Simple check out"
            image={require('../images/lock.gif')}/>

            <h2 className="headerSub"> Design Breakdown </h2>

            <InfoGroup 
            title="Purpose"
            text="Bridge the gap between sketchy Ticket sales and Users selling/buying tickets."
            image={require('../images/layers.gif')}/>
            <InfoGroup 
            title="Accessability"
            text="When researching and putting my ideas together I realized older people were more likely to come across this app due to the fact that Adults use Tickets to attend shows, concerts, etc., just like Kids & Teens. I had to take into consideration that it had to be simple enough for a less tech savvy person so they could complete a purchase no problem."
            image={require('../images/responsive.gif')}/>
            <InfoGroup 
            title="Aesthetic"
            text="The Aesthetic Usability makes it easier for users to handle and assure them they can handle the app with no confusion. I designed the site to be heavy on visuals especially Photos that way it makes it easier for people to find and have an idea what it is Visually. One less obstacle to converting a purchase."
            image={require('../images/imageSlide.gif')}/>
            <InfoGroup 
            title="Color"
            text="The Color way was simple basing it off the Apps Name, TicketSurf. I figured a bright cool blue would help contrast elements to emphasize what Users should pay attention to."
            image={require('../images/colorSwatch.gif')}/>

            <h2 className="headerSub"> Some UI examples </h2>
        <div className="ticketSurfUIExample">
            <img src={homepage} atl="Home Page Gif"
            />
        </div>

        <h2> TicketSurf Prototype </h2>
        <div className="surfWhole">
            <img src={surfwhole} atl="whole"
            />
        </div>

        <div className="ticketSurfLogo">
            <img src={require('../images/ticketSurfLogo.png')} width="300" />
            </div>

          </div>
        </div> 
    </div>
  </Layout>

)


export default TicketSurf