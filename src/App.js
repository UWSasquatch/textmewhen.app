import React, { useState } from "react";

import "./App.css";
import mockup from './mockup.png';

function App() {

  const [formEmail, setFormEmail] = useState("");
  const [message, setMessage] = useState("Be the first to know when we launch!")

  const onEmailChange = (event) => {
    setFormEmail(event.target.value)
  }

  const isValidEmail = (email) => {
    var re = /\S+@\S+\.\S+/;
    return re.test(email)
  }

  const sendSignupRequest = () => {

    console.log("Sending Form:", formEmail)

    fetch('https://text-me-when-api.herokuapp.com/signup/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: formEmail,
      })
    })

  }

  const onSubmitEmail = () => {

    if (isValidEmail(formEmail)) {
      sendSignupRequest()
      setMessage("Thank you for signing up!")
    } else {
      setMessage("Please enter a valid email :)")
    }
    setFormEmail("")

  }

  return (
    <div className="landing-page">

      <div className="content-area">
        <div className="left-area">
          <header className="header">
            <h1 className="header-title">Text Me When</h1>
            <p className="header-subtitle">Let your loved ones know you're safe</p>
            <p className="launch-message">
              {message}
            </p>
            <div className="custom-search">
              <input
                type="text"
                className="custom-search-input"
                placeholder="Enter your email"
                onChange={onEmailChange}
                value={formEmail}
              />
              <button className="custom-search-button" onClick={onSubmitEmail}>
                Sign Up
              </button>
            </div>
          </header>
        </div>
        <div className="right-area">
          <img className="mockup" src={mockup} alt="textmewhen mockup"/>
        </div>
      </div>





    </div>
  );
}

export default App;
