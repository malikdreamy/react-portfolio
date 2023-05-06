import React from 'react'

export default function Contact() {
    return (
      <>
      <section id="contact">
  <h2 class="text-center mb-4" style={{color: 'white'}}>Contact Me</h2>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <form>
        <div class="mb-3">
          <label for="name" class="form-label" style={{color: 'white'}}>Name</label>
          <input type="text" class="form-control" id="name" required/>
        </div>
        <div class="mb-3">
          <label for="email" class="form-label" style={{color: 'white'}}>Email</label>
          <input type="email" class="form-control" id="email" required/>
        </div>
        <div class="mb-3">
          <label for="message" class="form-label" style={{color: 'white'}}>Message</label>
          <textarea class="form-control" id="message" rows="5" required></textarea>
        </div>
        <button type="submit" class="btn btn-primary" style={{color: 'white'}}>Submit</button>
      </form>
    </div>
  </div>
</section>
   

          
      </>
    );
  }
  
