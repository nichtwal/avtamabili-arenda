import React from 'react'

const CarParams = ({props}) => {
    const {settings} = props
  return (
    <div className="car--item__features">
        {settings.map((img, index) => (
        <div key={index}>
            <img src={img.src} alt="setting" />
            <p>{img.set}</p>
        </div>
        ))}
  </div>
  )
}

export default CarParams