import "./WelcomeSection.css";

function WelcomeSection() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to Lazy Pom</h1>
        <p>A little bite for you. A little bite for them.</p>
        <a href="#menu" className="menu-button">
          Menu
        </a>
      </div>
    </section>
  );
}

export default WelcomeSection;
