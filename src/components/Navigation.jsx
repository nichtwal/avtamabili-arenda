import React from "react";
import { Link } from "react-router-dom";
import Burger from "./Burger";
const Navigation = () => {
  return (
    <>
     <nav className="nav--container">
        <ul>
          <Link to='/'><li>Главная</li></Link>
          <Link to='about'><li>О нас</li></Link>
          <Link to='conditions'><li>Условия и Услуги</li></Link>
          <Link to='autopark'><li>Автопарк</li></Link>
          <Link to='riding'><li>Движение в РА</li></Link>
          <Link to='contacts'><li>Контакты</li></Link>
          <Link to='security'><li>Безопасность</li></Link>
        </ul>
      </nav>
      <Burger />
    </>
     
  );
};

export default Navigation;
