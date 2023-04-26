import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <>

      <div className="welcome_text_container">
        <h1>
          Welcome to Time.me
          </h1>
        <div className="welcome_text">
          Time is an application that is built for freelancers to keep track of hours worked for clients.  As a freelance composer, I've always wanted a tool that I can use to track my own hours that I've worked for clients, so I decided to build one.  I hope it's helpful to you as you grow your own personal business!
        </div></div>
      <div className="client_page_button_container">
        <Link to={'/clients'} className="client_list_text">
          <button className="button">Get Started</button>
        </Link>
      </div>

    </>
  )
}

export default Welcome
