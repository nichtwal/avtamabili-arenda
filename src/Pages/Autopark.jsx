import React from "react";
import CarBlock from "../components/CarBlock/CarBlock";
const Autopark = () => {
  React.useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <section className="autopark--section">
      <div className="autopark--wrapper"></div>
      <div className="autopark--text">
        <h2>Автопарк</h2>
        <p>
          Предоставляем Надежные и современные автомобили для Вашего комфортного
          передвижения
        </p>
      </div>
      <CarBlock />
      <div className="show--container">
        <span className="show--button">Все автомобили</span>
      </div>
    </section>
  );
};

export default Autopark;
