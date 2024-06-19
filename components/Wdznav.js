import Link from "next/link";
import Image from "next/image";

import Router from "next/router";

const Wdznav = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-primary"
      style={{ display: "flex", alignItems: "spaceEvenly", minHeight: "5rem" }}
    >
      <div className="container-fluid">
      
        <div style={{ display: "flex", alignItems: "center", marginLeft: "3rem" }}>
          <h1
            style={{
              fontWeight: "bold",
              color: "black",
              letterSpacing: "0.05rem",
              marginTop: "0.5rem",
              marginLeft: "1rem",
            }}
          >
            Wykresy
          </h1>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link href="/" className="nav-link">Wstęp</Link>
            </li>
            <div className="dropdown nav-item bg-dark-custom" id="dropdown">
              <ul className="dropdown-menu" style={{ backgroundColor: "#212529", flexDirection: "column-reverse" }} aria-labelledby="dropdownMenuButton">
                <li><Link href="/page3" className="dropdown-item" style={{ color: "white", backgroundColor: "#212529" }}>Nowy pełnomocnik</Link></li>
              </ul>
            </div>
            <li className="nav-item">
              <Link href="/page2" className="nav-link">wykres</Link>
            </li>
            <li className="nav-item">
              <Link href="/page3" className="nav-link">wykres1</Link>
            </li>
            <li className="nav-item">
              <Link href="/page4" className="nav-link">Wykres2</Link>
            </li>

            <li className="nav-item">
              <Link href="/page5" className="nav-link">wykres3</Link>
            </li>

            <li className="nav-item">
              <Link href="/page6" className="nav-link">wykres4</Link>
            </li>


            <div className="nav-item ms-3" id="socials">
            
           
              
                
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Wdznav;
