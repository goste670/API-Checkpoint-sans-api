import React from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom'; // Import useNavigate instead of useHistory
import data from '../data/data';
import '../style/App2.css';
const CarDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();


  const car = data.find(c => c.id == id);

 if (!car) {
   console.error("Car not found");
   return <p id='erreur'>Car not found</p>;
 }

  const Achat = () => {
    alert('Vous allez recevoir votre voiture dans 4 ans.');

  };

  return (
    <div className="car-detail">

        <img src={car.img} alt={car.name}  />
      <div>
      <Link to="/">Retour au menu principal</Link>
        <h1>{car.name}</h1>
        <p>Type: {car.type}</p>
        <p>Gasoline Liter: {car.gasolineLiter}</p>
        <p>Kind of Transition: {car.kindOfTransition}</p>
        <p>People: {car.people}</p>
        <p>Price Per Day: {car.pricePerDay}</p>
        <p>ID: {car.id}</p>
        {/* */}
      </div>
      <div>
        <button onClick={Achat}>Acheter la voiture</button>
      </div>


    </div>
  );
}

export default CarDetail;
