import React from 'react'
import Link from 'next/link'

const Footer1 = () => {
  return (
    <footer className="bg-dark text-white py-10" id="footer" style={{width: "100%"}}>
    <div className="container">
      <div className="row">
        <div className="col-md-4 my-1">
          <h3>Krótko o mnie</h3>
          <p style={{letterSpacing:"0.05rem"}}>Pracuje według paradygmatu Javascript Everywhere.</p>
          <p style={{letterSpacing:"0.05rem"}}>Piszę kod raz, który następnie działa w przeglądarce i w aplikacjach na: iOS | Android | Windows | macOs | Linux</p>
        </div>
        <div className="col-md-4 my-1">
          <h3>Recent Posts</h3>
          <ul className="list-unstyled">
            <li><Link href="#">Post One</Link></li>
            <li><Link href="#">Post Two</Link></li>
            <li><Link href="#">Post Three</Link></li>
          </ul>
        </div>
        <div className="col-md-4 my-1">
          <h3>Kontakt</h3>
          <p>Mail</p>
          <p><Link href="mailto:stanislawlaskowski87@gmail.com">stanislawlaskowski87@gmail.com</Link></p>
          <p>Telefon</p>
          <p>504 940 279</p>
          
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer1