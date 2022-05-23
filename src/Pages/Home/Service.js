import React from "react";

const Service = ({ service }) => {
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
          <button className="btn btn-primary">Book Now !</button>
        </div>
      </div>
    </div>
  );
};

export default Service;
