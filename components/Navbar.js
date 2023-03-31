import Link from "next/link";
import Image from "next/image";
import twitter from "../public/twitter.svg";
import facebook from "../public/facebook.svg";



const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark-custom"
      style={{display: "flex", alignItems: "center", minHeight:"5rem"}}
    >
      <div className="container">
        <div style={{ display: "flex", alignItems: "center" }}>
  
          <h5
            style={{
              fontWeight: "bold",
              color: "#00B8D4",
              letterSpacing: "0.05rem",
              marginTop: "0.5rem",
            }}
          >
            Stanisław Laskowski - konserwatysta w Poznaniu
          </h5>
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
              <Link href="/" className="nav-link">Home</Link>
            </li>

            <div className="dropdown nav-item bg-dark-custom" id="dropdown">
  <button
 
    className="btn dropdown-toggle nav-link"
    type="button"
    id="dropdownMenuLink"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    Blog
  </button>
  <ul className="dropdown-menu"  style={{backgroundColor: "#212529",  flexDirection:"column-reverse"}} aria-labelledby="dropdownMenuButton">
   <li><Link href="/blogs/second" className="dropdown-item" style={{color: "white", backgroundColor: "#212529"}}>Minister Czarnek w Poznaniu</Link></li>
    <li><Link href="/blogs/first" className="dropdown-item" style={{color: "white", backgroundColor: "#212529"}}>Nowy pełnomocnik</Link></li>
   
  </ul>
</div>

            <li className="nav-item">
              <Link href="/about" className="nav-link">About</Link>
            </li>

            <div className="nav-item ms-3" id="socials">
              <Link
                href="https://www.facebook.com/laszej"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link"
              >
                <Image src={facebook} alt="Code" height={20} width={20} />
              </Link>
              <Link
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link"
              >
                <Image
                  src={twitter}
                  alt="Code"
                  height={20}
                  width={20}
                  className="twitter"
                />
              </Link>
            </div>
          </ul></div>
</div>
</nav>
);
};

export default Navbar;