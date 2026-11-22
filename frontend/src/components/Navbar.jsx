import "./Navbar.css";
const logo = "/lazypomlogo.png";

const Navbar = () => {
  return (
    <header className="navbar">
      <nav className="navbar-left">
        <a href="#home" className="underline">
          Home
        </a>
        <a href="#gallery" className="underline">
          Gallery
        </a>
        <a href="#contact" className="underline">
          Contact
        </a>
      </nav>

      <a href="/" className="navbar-logo">
        <img src={logo} alt="Lazy Pom Cafe logo"></img>
      </a>

      <nav className="navbar-right">
        <a href="/shop" className="underline">
          Shop
        </a>
        <a href="/cart" className="underline">
          View cart
        </a>
        <a href="/login" className="login-button">
          Log in
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
