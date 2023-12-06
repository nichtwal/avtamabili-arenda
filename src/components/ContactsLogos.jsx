import React from "react";
import { YMaps, Placemark, Map } from "@pbe/react-yandex-maps";
import whatsup from "../assets/layouts/icons/whatsup.png";
import telegram from "../assets/layouts/icons/telegram-2.png";
import { footerInfo } from "../shared/constants";
const ContactsLogos = () => {
  return (
    <section className="logos--contacts">
      <div className="logos--contacts__container">
        <div className="logos--contacts__container__item">
          {footerInfo.map((el, index) => (
            <div
              key={index}
              className="logos--contacts__container__item--icons"
            >
              {el.svg}
              <a href={el.link} target="_blank" rel="noreferrer">
                {el.discr}
              </a>
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
        <div className="newmap">
          <YMaps>
            <Map
              defaultState={{ center: [40.218587, 44.541589], zoom: 15 }}
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
      </div>
      <div className="contacts--discr">
        <h2>Уважаемые Клиенты</h2>
        <p>
          Вы всегда можете посетить наш офис на ул.Фанарджян д. 35 и оформить
          договор аренды в приятной уютной атмосфере, наслаждаясь бесплатными
          горячими и прохладительными напитками. Так же в любое время Вы можете
          связаться с нами по телефону, мессенджерам WhatsApp, Telegram, по
          средствам внутреннего чата на сайте или электронной почте.
        </p>
        <p>
        Всегда рады
          Вам, команда ReliantRide Rental Cars.
        </p>
      </div>
    </section>
  );
};

export default ContactsLogos;
