import React from 'react'

export default function Bio() {
    return (
      <>
       <header className="text-center mb-5">
      <h1>Malik Tornes</h1>
      <p>Website Programmer</p>
    </header>
    <section id="aboutme" className="mb-5">
    <div className="row">
    <div className="col-md-4">
 
      <img src="./images/malik.jpg" className="img-fluid" alt="Malik"/>
    </div>
    <div className="col-md-8">
      <h2>About me</h2>
      <p className="lead">Hi, my name is Malik Tornes. I am 26 years old and I currently live in Woodland Hills, CA. I am a full stack developer with an advanced skillset in HTML, CSS, and JavaScript. Below you will see a few of my latest projects.</p>
    </div>
    </div>
    </section>

          
      </>
    );
  }
  