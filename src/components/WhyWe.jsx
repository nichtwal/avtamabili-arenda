import React from "react";
import { gifs } from "../assets/layouts/gifs/index";
const WhyWe = () => {
  return (
    <section className="company--container">
      <div className="company--container__text">
        <h2>Почему Reliant Ride</h2>
        <p>Reliant Ride Rental Cars - ваш надежный партнер в мире аренды автомобилей. Мы предоставляем  качественные, обслуженные и современные автомобили для вашего комфортного передвижения, а также гарантируем выдающийся сервис, призванный удовлетворить самые высокие требования клиентов.</p>
      </div>
      <div className="company--container__image">
        {gifs.map((el, index) => (
          <div
            key={`${el}+${index}`}
            className="company--container__image--car"
          >
            <img src={el.src} alt="car" />
            <p>{el.disc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyWe;
