import React from "react";
import CarItem from "./CarItem";
import { carsPull } from "../../shared/constants";
import CarParams from "./CarParams";
import { useDispatch } from "react-redux";
import { addCar, defaultState } from "../../Redux/slices/carSlice";
const CarBlock = () => {
  const [selectedCar, setSelectedCar] = React.useState(null);
  const dispatch = useDispatch();
  const handleCar = (car) => {
    setSelectedCar(car);
    dispatch(addCar(car));
    document.querySelector("body").style.overflow = "hidden";
  };
  const handleClose = () => {
    setSelectedCar(null);
    document.querySelector("body").style.overflow = "unset";
    dispatch(defaultState())
  };
  return (
    <div className="carBlock--container">
      {carsPull.map((el) => (
        <div key={el.id + "1"} className="car--item">
          <div className="car--item__image" onClick={() => handleCar(el)}>
            <img src={el.src} alt="car" />
          </div>
          <div className="car--item__discrpion">
            <h5>{el.discr}</h5>
            <p>R$ {el.price}</p>
          </div>
          <CarParams props={el} />
        </div>
      ))}
      {selectedCar && <CarItem onClose={() => handleClose()} />}
    </div>
  );
};

export default CarBlock;
