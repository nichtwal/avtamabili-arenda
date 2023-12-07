import React from "react";
import { aboutItems } from "../shared/constants";
import Form from "../components/Form";
const About = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const modal = React.useRef(null);
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleClose = (e) => {
    if (e.target === modal.current) {
      setIsOpen(false);
      document.body.style.overflow = "auto";
    }
  };
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
          Наша приоритетная задача- обеспечить Вас автомобилем под ваши
          персональные нужды в кратчайшие сроки.
        </p>
        <button className="about-button" onClick={() => { setIsOpen(true); document.body.style.overflow = 'hidden'}}>Оставить заявку</button>
      </div>
      {isOpen && (
          <div className="about-modal-form"
          ref={modal}
          onClick={(e) => handleClose(e)}
          >
            <Form />
          </div>
        )}
    </section>
  );
};

export default About;
