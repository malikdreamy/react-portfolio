import React from 'react'

export default function Bio() {
    return (
      <>
  
       <header className="text-center mb-5 bg-danger" >
      <h1 style={{color: 'white'}}>Malik Tornes</h1>
      <p style={{color: 'white'}}>JavaScript Programmer</p>
    </header>
    <section id="aboutme" className="mb-5 bg-dark">
    <div className="row">
    <div className="col-md-4">
 
      <img src="./images/malik.jpg" className="img-fluid" alt="Malik"/>
    </div>
    <div className="col-md-8">
      <h2>About me</h2>
      <p className="lead" style={{color: 'white'}}><strong>Hi, my name is Malik Tornes. I am 26 years old and I currently live in Woodland Hills, CA. I am a full stack developer with an advanced skillset in HTML, CSS, and JavaScript. Below you will see a few of my latest projects.</strong></p>
    </div>
    </div>
    </section>

          
      </>
    );
  }
  
