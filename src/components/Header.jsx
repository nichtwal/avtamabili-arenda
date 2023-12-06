import React from "react";
import Navigation from "./Navigation";
import {Link} from 'react-router-dom'
import whatsup from "../assets/layouts/icons/whatsup.png";
import telegram from "../assets/layouts/icons/telegram-2.png";
const Header = () => {
  return (
    <header>
      <div className="header--container">
      <Link to='/'><h1>Reliant Ride</h1></Link>
        <div className="header--container__phone">
          <div className="header-contacts">
            <p>Позвони НАМ:</p>
            <p><a href="tel: +374(77)582588">+374(77)582588</a></p>
          </div>
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
      </div>
      <Navigation />
    </header>
  );
};

export default Header;
