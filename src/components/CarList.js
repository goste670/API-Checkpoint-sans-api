// CarList.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Car from './Car';
import data from '../data/data';
import '../style/App.css';

const CarList = () => {
  console.log("Data:", data);
  return (
    <div className="car-list">
      {data.map(car => (
        <Link to={`/detail/${car.id}`} key={car.id} className="car-box">
          <Car key={car.id} car={car} />
          <div className="car-info">
            <h1>{car.name}</h1>
            <p>Type: {car.type}</p>
            <p>Price Per Day: {car.pricePerDay}</p>
            <p>ID: {car.id}</p>
            
          </div>
        </Link>
      ))}
    </div>
  );
}

export default CarList;
