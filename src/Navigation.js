import React, {useState} from 'react'
import Bio from './Bio'
import Resume from './Resume'
import Projects from './Projects'
import Contact from './Contact'

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

function viewResume(){
  setPage(page = Resume)
}




    return (
      <>
      
        <nav className="navbar navbar-expand-lg navbar-light bg-danger" >
    <div className="container-fluid">
      <a className="navbar-brand" href="#" style={{color: 'white'}}><strong>Portfolio</strong></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#aboutme" onClick={showAboutMe} style={{color: 'white'}}><strong>ABOUT ME</strong></a>
          </li>
          <li className="nav-item" >
            <a className="nav-link" href="#projects" onClick={showProjects} style={{color: 'white'}}><strong>Projects</strong></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact" onClick={contactMe} style={{color: 'white'}}><strong>Contact Me</strong></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact" onClick={viewResume} style={{color: 'white'}}><strong>Resume</strong></a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div className="bg-dark">{page}</div>

  </>
    
    );
  }
