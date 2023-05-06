import React from 'react'

export default function Resume() {
    return (
      <>
      <div class="container">
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <h1 class="text-center mb-4" style={{color: 'white'}}>Resume</h1>
        <p class="lead text-center" style={{color: 'white'}}>Experienced Software Developer</p>
        
        <h2 style={{color: 'white'}}>Professional Experience</h2>
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Sales Associate</h5>
            <h6 class="card-subtitle mb-2 text-muted">Nordstrom</h6>
            <p class="card-text">Assists customers in a busy sales environment which including styling outfits for clients, cash handling, opening nordstrom credit cards and providing customer service. This position also included answering phone calls and keeping a client book to follow up on sales and even generate more sales.</p>
          </div>
        </div>
        <div class="card mt-3">
          <div class="card-body">
            <h5 class="card-title">WRESTLING INSTRUCTOR</h5>
            <h6 class="card-subtitle mb-2 text-muted">Z-FORCE - Woodland Hills, CA</h6>
            <p class="card-text">Teach wrestling training courses to young students, managing up to 15 student classes.
Provide individualized wrestling assistance to students to increase proficiency and techniques. Demonstrate leadership skills by generating client leads and providing follow-
up that results in obtaining new students.</p>
          </div>
        </div>
        <h2 style={{color: 'white'}}>Education</h2>
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Graduate of UCLA Coding Bootcamp</h5>
            <p class="card-text">Relevant coursework: Web Development of the MERN Stack. Fluent in Vanilla Javascript, MongoDB, Express, React and Node.js.</p>
          </div>
        </div>
        
       
        
        <h2 style={{color: 'white'}}>Skills</h2>
        
        <ul class="list-group">
          <li class="list-group-item">HTML</li>
          <li class="list-group-item">CSS</li>
          <li class="list-group-item">JavaScript</li>
          <li class="list-group-item">Node JS</li>
          <li class="list-group-item">React</li>
          <li class="list-group-item">Electron JS</li>
        </ul>
        
     
        
        <p class="text-center mt-4">Contact: john.doe@example.com | (123) 456-7890</p>
      </div>
    </div>
  </div>


  
      </>
    );
  }