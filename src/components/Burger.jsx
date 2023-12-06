import React from "react";
import { Link } from "react-router-dom";
import whatsup from "../assets/layouts/icons/whatsup.png";
import telegram from "../assets/layouts/icons/telegram-2.png";
const Burger = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const menuRef = React.useRef(null);
  const handleBurger = () => {
    setIsOpen(!isOpen);
  };
  React.useEffect(() => {
    const handleOutsideClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);
  return (
    <div className="burger">
      <div className="burger--button" onClick={() => handleBurger()}></div>
      <div
        ref={menuRef}
        className={isOpen ? "burger--menu active" : "burger--menu"}
      >
        <nav className="burger--container">
        <div className="burger-links">
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
              href="https://t.me/share/url?url=текст&phone=37477582588"
            >
              <div>
                <img src={telegram} alt="Telegram icon" />
              </div>
            </a>
          </div>
          <ul onClick={() => handleBurger()}>
          <Link to='/'><li>Главная</li></Link>
          <Link to='/about'><li>О нас</li></Link>
          <Link to='/conditions'><li>Условия и Услуги</li></Link>
          <Link to='/autopark'><li>Автопарк</li></Link>
          <Link to='/contacts'><li>Движение в РА</li></Link>
          <Link to='/contacts'><li>Контакты</li></Link>
          <Link to='/security'><li>Безопасность</li></Link>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Burger;
