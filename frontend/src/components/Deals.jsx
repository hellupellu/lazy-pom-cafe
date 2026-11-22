import "./Deals.css";

function Deals() {
  return (
    <section className="deals">
      <h2>Daily Pawsome deals</h2>

      <div className="deals-container">
        <div className="deal-card">
          <img src="/food.jpg" alt="Daily food"></img>

          <div className="deal-info">
            <h3>Daily food</h3>
            <span>5.90€</span>
          </div>
          <p>Foccacia bread w jamon serrano</p>
        </div>

        <div className="deal-card">
          <img src="/drink.jpg" alt="Daily food"></img>

          <div className="deal-info">
            <h3>Daily drink</h3>
            <span>3.90€</span>
          </div>
          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            incidunt rerum porro?
          </p>
        </div>

        <div className="deal-card">
          <img src="dogtreat.jpg" alt="Daily food"></img>
          <div className="deal-info">
            <h3>Daily dog treat</h3>
            <span>1.50€</span>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            incidunt rerum porro?
          </p>
        </div>
      </div>
    </section>
  );
}

export default Deals;
