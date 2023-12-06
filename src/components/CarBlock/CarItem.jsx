import React, { useState, useEffect, useRef } from "react";
import { exit, rigthArr, leftArr } from "../../assets/layouts/icons";
import { selectedCar, toggleSelected } from "../../Redux/slices/carSlice";
import { useSelector, useDispatch } from "react-redux";
import { addOption } from "../../Redux/slices/carSlice";
import CarParams from "./CarParams";
import Form from "../Form";
import { Link } from "react-router-dom";

const CarItem = ({ onClose }) => {
  const { car } = useSelector(selectedCar);
  const { totalPrice } = useSelector(selectedCar);
  const dispatch = useDispatch();
  const [selectedPhoto, setSelectedPhoto] = useState(car.src);
  const [albumPhoto, setAlbumPhoto] = useState(0);
  const [isActiveFrom, setIsActiveForm] = React.useState(false);
  const album = car.album;
  const options = car.checkboxes;
  const modalRef = useRef(null);
  useEffect(() => {
    window.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    });
    window.addEventListener("popstate", () => {
      onClose();
    });
  }, [onClose]);
useEffect(() => {
  window.scrollTo(0,0)

}, [])
  const handlePhoto = (event, index) => {
    const photoSrc = event.target.currentSrc;
    setSelectedPhoto(photoSrc);
    setAlbumPhoto(index);
  };

  const handleAlbumPrev = () => {
    setAlbumPhoto((prevAlbumPhoto) => {
      const newAlbumPhoto =
        prevAlbumPhoto === 0 ? album.length - 1 : prevAlbumPhoto - 1;
      setSelectedPhoto(album[newAlbumPhoto]);
      return newAlbumPhoto;
    });
  };

  const handleAlbumNext = () => {
    setAlbumPhoto((prevAlbumPhoto) => {
      const newAlbumPhoto =
        prevAlbumPhoto === album.length - 1 ? 0 : prevAlbumPhoto + 1;
      setSelectedPhoto(album[newAlbumPhoto]);
      return newAlbumPhoto;
    });
  };

  const handlePriceChange = (el) => {
    dispatch(toggleSelected({ id: el.id, selected: !el.selected }));
    dispatch(addOption(el));
  };

  const handlerFormData = () => {
    setIsActiveForm(true);
    setTimeout(() => {
      modalRef.current.scrollTo(0,  modalRef.current.scrollHeight)
    }, 500)
  };

  return (
    <div ref={modalRef} className="modal">
      <div className="modal--container">
        <div className="modal--container-car">
          <div className="main-car">
            <img src={selectedPhoto} alt="" />
            <div className="main-car__buttons">
              <div className="main-car__buttons-left" onClick={handleAlbumPrev}>
                <img src={rigthArr} alt="arr" />
              </div>
              <div
                className="main-car__buttons-right"
                onClick={handleAlbumNext}
              >
                <img src={leftArr} alt="arr" />
              </div>
            </div>
          </div>
          <div className="album">
            {album.map((el, index) => (
              <img
                src={el}
                alt="car"
                key={index}
                onClick={(event) => handlePhoto(event, index)}
              />
            ))}
          </div>
        </div>
        <div className="modal--container-settings">
          <h3>Дополнительные опции</h3>
          <CarParams props={car} />
          <p className="discr">{car.about}</p>
          <div className="checkboxes--container">
            {options.map((el, index) => (
              <div className="checkboxes--container-item" key={index}>
                <input
                  type="checkbox"
                  name={car.id}
                  checked={el.selected}
                  onChange={() => handlePriceChange(el)}
                />
                <div className="checkboxes--container-item_text">
                  <p>{el.name}</p>
                  <p>֏ {el.price}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="star--conditions">
            <Link onClick={onClose} to='/conditions'>Услуги со звездочкой *</Link>
          </div>
          <div className="total-price">
            <p>Итого: ֏{totalPrice}</p>
          </div>
          <button className="reserve" onClick={handlerFormData}>
            забронировать
          </button>
        </div>
      </div>
      <Form classname={isActiveFrom ? "modal--form active" : "modal--form"} />
      <div className="exit" onClick={onClose}>
        <img src={exit} alt="exit" />
      </div>
    </div>
  );
};

export default CarItem;
