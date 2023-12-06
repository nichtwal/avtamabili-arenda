import React from 'react'
import CarBlock from './CarBlock/CarBlock'
import { useNavigate } from 'react-router-dom';

const Section3 = ({props}) => {
  const navigate = useNavigate()
  const navigateToAutopark = () => {
    navigate('/autopark');
  };
  return (
    <section  className='car--container'>
        <div className='car--container__text'>
            <h2>Наш Автопарк</h2>
            <p>Предоставляем Надежные и современные автомобили для Вашего комфортного передвижения</p>
        </div>
       <CarBlock props={props} />
       <button className='button' onClick={navigateToAutopark}>Посмотреть весь автопарк</button>
    </section>
  )
}
export default Section3