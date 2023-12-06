import React from 'react'
import {cars} from '../assets/layouts/car-icons/index'
const Logos = () => {
  return (
    <section className='logos--container'>
        {cars.map((el, index) => (
            <img key={`${el}+${index}`} src={el} alt="car" />
        ))}
    </section>
  )
}

export default Logos