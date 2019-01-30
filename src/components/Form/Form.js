import React from "react";
import './Form.css'


class Main extends React.Component {
    render() {
      return <main name="contactForm" className="main">
      
       
      <form className="formGroup" action="https://formspree.io/blurrdinfo@gmail.com" method="POST">
     
      <h1 className="formTitle"> Hit me up! </h1>
          <input className="inputGroup" type="firstName" name="firstName" placeholder="First Name" />
          <input className="inputGroup" type="lastName" name="lastName" placeholder="Last Name" />
          <input className="inputGroup" type="email" name="email" placeholder="Your email" />
          <textarea className="textForm" name="message" placeholder="Message" defaultValue={""} />
          <button className="buttonForm"type="submit">Send</button>
          
      </form>      
 </main>;
    }
  
  }
  
  export default Main;
     


