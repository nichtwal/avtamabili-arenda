import React from "react";
import { classNames } from "../shared/functions";
import { useDispatch, useSelector } from "react-redux";
import { selectedCar } from "../Redux/slices/carSlice";
import { removeOption } from "../Redux/slices/carSlice";
import { isDisabled } from "@testing-library/user-event/dist/utils";

const Form = (props) => {
  const { options } = useSelector(selectedCar);
  const { totalPrice } = useSelector(selectedCar);
  const [terms, setTerms] = React.useState(false);
  const [politics, setPolitics] = React.useState(false);
  const dispatch = useDispatch();
  const connection = [
    { id: 0, name: "Telegram" },
    { id: 1, name: "What's up" },
    { id: 2, name: "Viber" },
    { id: 3, name: "По номеру" },
  ];
  const lawTerms = [
    { id: 0, name: "Я ознакомлен с", link: "политикой конфиденциальности" },
    { id: 1, name: "Я принимаю", link: "условия использования" },
  ];
  const [formData, setFormData] = React.useState({
    name: "",
    birth: "",
    email: "",
    phone: "",
  });
  const [connectOptions, setConnectOptions] = React.useState([
    { state: "" },
    { state: "" },
    { state: "" },
    { state: "" },
  ]);
  const handleOption = (state, el) => {
    if (state) {
      setConnectOptions([
        ...connectOptions,
        connectOptions[el.id].state = el.name
      ])
    } else {
      setConnectOptions([
        ...connectOptions,
        connectOptions[el.id].state = ''
      ])
    }
  };
const opt = connectOptions.map(el => (
  el.state
))
  const handleTerm = (id) => {
    if (id === 0) {
      setPolitics(!politics);
    } else if (id === 1) {
      setTerms(!terms);
    }
  };
  const handlerFormSumbit = async (e) => {
    const messageOptions = options.map((el) => el.name).join("; ");
    const opt = connectOptions.map(el => (
      el.state
    )).join(' ')
    try {
      const chatId = "699873191";
      const message = `Имя: ${formData.name}; Дата рождения: ${formData.birth}; Email: ${formData.email}, Номер телефона: ${formData.phone}. Вид связи: ${opt}; Опции: ${messageOptions}. Детали: ${totalPrice};`;
      const myToken = "6767376629:AAHLHvcmZ9H2UEamq7i_iWBKeIj_1Gvi9Aw";
      const response = await fetch(
        `https://api.telegram.org/bot${myToken}/sendMessage?chat_id=${chatId}&text=${message}`
      );
      if (response.ok) {
        e.preventDefault();
      }
    } catch (error) {
      console.error("something went wrong");
    }
  };
  const handleRemover = (el) => {
    dispatch(removeOption(el));
  };
  return (
    <div id="form" className={classNames("form--container", props.classname)}>
      <div className="form--container_wrapper">
        <form
          onSubmit={handlerFormSumbit}
          action=""
          method="get"
          className="form--container_wrapper-form"
        >
          <h3>Оставить заявку</h3>
          <div className="form-example">
            <input
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              value={formData.name}
              type="text"
              placeholder="Имя и фамилия"
              name="name"
              id="name"
              required
            />
          </div>
          <div className="form-example">
            <input
              onChange={(e) =>
                setFormData({ ...formData, birth: e.target.value })
              }
              value={formData.birth}
              type="date"
              placeholder="Дата рождения"
              name="birth"
              id="birth"
              required
            />
          </div>
          <div className="form-example">
            <input
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              value={formData.email}
              type="email"
              placeholder="Email"
              name="email"
              id="email"
              required
            />
          </div>
          <div className="form-options">
            {options.length > 0
              ? options.map((el) => (
                  <span key={el.id} className={classNames("option", el.id)}>
                    {el.name}
                    <span onClick={() => handleRemover(el)}>&times;</span>
                  </span>
                ))
              : null}
          </div>
          <div className="form-example">
            <input
              required
              type="phone"
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              value={formData.text}
              placeholder="Номер телефона"
            />
          </div>
          <div className="typeof--connection">
            <p>Предпочтительный способ связи:</p>
            <div className="typesof">
              {connection.map((el) => (
                <div key={el.id} className="type_item">
                  <input
                    type="checkbox"
                    onChange={(e) => handleOption(e.target.checked, el)}
                  />
                  <p>{el.name}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="terms_container">
            {lawTerms.map((el) => (
              <div key={el.id} className="terms">
                <input type="checkbox" onChange={() => handleTerm(el.id)} />
                <p>
                  {el.name}
                  <strong> {el.link}</strong>
                </p>
              </div>
            ))}
          </div>
          <div className="form-example">
            {totalPrice !== 0 && <span>Итог: {totalPrice}</span>}
            <input
              disabled={terms && politics ? false : true}
              className="submit"
              type="submit"
              value="Оставить заявку"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
