import React from "react";
import { Link } from "react-router-dom";
const Section2 = () => {
  const slideRef = React.useRef(null)
  React.useEffect(() => {
    const handleSlide = (event) => {
      const elementTrigger = slideRef.current.getBoundingClientRect().top
     if (window.scrollY > elementTrigger/2) {
      document.querySelector('.slide--section__gray').classList.add('active')
      document.querySelector('.slide--section__yellow').classList.add('active')
     }
    }
    window.addEventListener('scroll', handleSlide);
    return () => {
      window.removeEventListener('scroll', handleSlide)
    }
  }, [])
  return (
    <section ref={slideRef} className="slide--section">
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
