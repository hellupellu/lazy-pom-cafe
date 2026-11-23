import { Link } from "react-router";
import "./Navbar.css";
const logo = "/lazypomlogo.png";

const Navbar = () => {
  return (
    <header className="navbar">
      <nav className="navbar-left">
        <Link to="/" className="underline">
          Home
        </Link>
        <a href="#gallery" className="underline">
          Gallery
        </a>
        <a href="#contact" className="underline">
          Contact
        </a>
      </nav>

      <Link to="/" className="navbar-logo">
        <img src={logo} alt="Lazy Pom Cafe logo"></img>
      </Link>

      <nav className="navbar-right">
        <Link to="/shop" className="underline">
          Shop
        </Link>
        <Link to="/cart" className="underline">
          View cart
        </Link>
        <Link to="/login" className="login-button">
          Log in
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
