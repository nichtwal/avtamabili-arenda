import React from "react";
import { Link } from "react-router-dom";
const Section2 = () => {
  return (
    <section className="slide--section">
      <div className="slide--section__yellow">
        <div className="slide--section__yellow--text">
          <Link to="autopark">
            <h2>Автопарк</h2>
            <p>Выберете подходящую машину</p>
          </Link>
        </div>
      </div>
      <div className="slide--section__gray">
        <div className="slide--section__gray--text">
          <Link to="autopark">
            <h2>Калькулятор</h2>
            <p>Рассчитайте стоимость</p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Section2;
