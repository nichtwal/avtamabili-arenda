import React from "react";
import { aboutItems } from "../shared/constants";
const About = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="about--container">
      <div className="about--wrapper"></div>
      <div className="about--container__text">
        <p>
          Добро пожаловать в Reliant Ride Rental Cars— Новую Эру Автопроката!
        </p>
      </div>
      <div className="about--information">
        <h3>О компании</h3>
        <p>
          Мы молодая компания по аренде автомобилей, стремящаяся сделать прокат
          автомобилей максимально комфортным, быстрым и безопасным для наших
          клиентов.
        </p>
        <div className="about--information_items">
          {aboutItems.map((el) => (
            <div key={el.id} className="info_item">
              <div className="round--wrapper">
                <div className="round--wrapper_icon">{el.src}</div>
              </div>
              <div className="rec--wrapper">
                <p>{el.name}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="tsk">
        Наша приоритетная задача- обеспечить Вас автомобилем под ваши персональные нужды в кратчайшие сроки.
        </p>
      </div>
    </section>
  );
};

export default About;
