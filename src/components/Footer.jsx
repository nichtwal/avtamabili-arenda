import React from "react";
import { YMaps, Placemark, Map } from "@pbe/react-yandex-maps";
import { footerInfo } from "../shared/constants";
// import exit from '../assets/layouts/icons/exit.png'
// import Form from "./Form";
import whatsup from "../assets/layouts/icons/whatsup.png";
import telegram from "../assets/layouts/icons/telegram-2.png";
const Footer = () => {
  const year = new Date().getFullYear();
// const [isActiveForm, setIsActiveForm] = React.useState(false)
// const handleFormActive = () => {
//   document.querySelector('body').style.overflow = 'hidden'
//   setIsActiveForm(true)
// }
// const handleFormDisActive= () => {
//   document.querySelector('body').style.overflow = 'unset'
//   setIsActiveForm(false)
// }
  return (
    <footer className="contacts--wrapper">
      <div className="contacts--container">
        <div className="contacts--container__text">
          <h2>СВЯЗАТЬСЯ С НАМИ</h2>
          {/* {isActiveForm && (
            <div className="modal-footer-form" >
              <img src={exit} alt="" onClick={handleFormDisActive}/>
              <Form />
            </div>
          )} */}
          <p>Путешествуй с комфортом, звони НАМ!</p>
        </div>
        <div className="contacts--container__contacts">
          {footerInfo.map((el, index) => (
            <div
              key={index}
              className="contacts--container__contacts--item"
            >
              {el.svg}
              <a rel="noreferrer" target="_blank" href={el.link}>{el.discr}</a>
            </div>
          ))}
           <div className="header-links">
            <a
            rel="noreferrer"
              target="_blank"
              href="https://api.whatsapp.com/send?phone=37477582588"
            >
              <div>
                <img src={whatsup} alt="whatsApp icon" />
              </div>
            </a>
            <a
            rel="noreferrer"
              target="_blank"
              href="https://t.me/@ReliantRideCars"
            >
              <div>
                <img src={telegram} alt="Telegram icon" />
              </div>
            </a>
          </div>
        </div>

        <div className="map">
          <YMaps>
            <Map
              defaultState={{ center: [40.218587, 44.541589], zoom: 10 }}
              width="100%"
              height="100%"
            >
              <Placemark
                geometry={[40.218587, 44.541589]}
                options={{
                  iconImageSize: [40, 40],
                }}
              />
            </Map>
          </YMaps>
        </div>
        <div className="copyrights">
          <p>&copy; {year} Все права защищены</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
