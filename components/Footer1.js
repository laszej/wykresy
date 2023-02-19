import React from 'react'

const Footer1 = () => {
  return (
    <footer class="bg-dark text-white py-5 mt-6" id="footer" style={{marginTop:"6rem"}}>
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <h3>About Us</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula massa eu turpis malesuada, nec tristique risus tristique.</p>
        </div>
        <div class="col-md-4">
          <h3>Recent Posts</h3>
          <ul class="list-unstyled">
            <li><a href="#">Post One</a></li>
            <li><a href="#">Post Two</a></li>
            <li><a href="#">Post Three</a></li>
          </ul>
        </div>
        <div class="col-md-4">
          <h3>Kontakt</h3>
          <p>Mail</p>
          <p><a href="mailto:stanislawlaskowski87@gmail.com">stanislawlaskowski87@gmail.com</a></p>
          <p>Telefon</p>
          <p>504 940 279</p>
          
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer1