import React, {useState} from 'react'
import Bio from './Bio'

import Projects from './Projects'
import Contact from './Contact'

// Import all of Bootstrap's CSS
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';



export default function Navigation() {
let [page, setPage] = useState(Bio)

function contactMe(){
  setPage(page = Contact)
}

function showProjects(){
  setPage(page = Projects) 
}

function showAboutMe(){
  setPage(page = Bio)
}



    return (
      <>
      
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">My Portfolio</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#aboutme" onClick={showAboutMe}>ABOUT ME</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#projects" onClick={showProjects}>Projects</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact" onClick={contactMe}>Contact Me</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div>{page}</div>

  </>
    
    );
  }