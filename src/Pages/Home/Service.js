import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Service = ({ service }) => {
  const navigate = useNavigate();
  const navigateManufacture = () => {
    navigate("/manufacture");
  };
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={service.img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{service.name}</h2>
        <h4 className="card-title">{service.price}</h4>
        <p>{service.description}</p>
        <div className="card-actions justify-end">
          <Link
            to="/manufacture"
            onClick={navigateManufacture}
            className="btn btn-primary"
          >
            Book Now !
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
