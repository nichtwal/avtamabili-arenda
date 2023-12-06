import React from "react";
import {Link} from 'react-router-dom'
const Help = () => {
  return (
    <section className="help--container">
      <div>
        <h5>Нужна помошь? Мы здесь именно для этого</h5>
        <Link to ='contacts'><button>Узнать подробнее</button></Link>
      </div>
    </section>
  );
};

export default Help;
