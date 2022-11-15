import React from 'react'
import "./App.css";

function Home() {
  return (
    <div className='container'>
      <div className='homesize'>
        <link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" />

        <div id='wrapper' className="wrapper">
          <p className="main-text"><u>Welcome back to School</u></p>
          <div className="bubble small"></div>
          <div className="bubble s-medium"></div>
          <div className="bubble medium"></div>
          <div className="bubble large"></div>
          <div className="bubble small-l"></div>
        </div>
      </div>
    </div>
  )
}

export default Home