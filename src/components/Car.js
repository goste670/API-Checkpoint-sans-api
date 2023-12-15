// Car.jsx
import React from 'react';
import '../style/App.css';

const Car = ({ car }) => {
  return (
    <div className="car-box1">
      <h2>{car.name}</h2>
      {/* Afficher d'autres informations sur la voiture */}
      <img src={car.img} alt={car.name} className="car-image" />
    </div>
  );
}

export default Car;
