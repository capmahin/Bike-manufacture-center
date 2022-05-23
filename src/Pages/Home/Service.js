import React from "react";

const Service = ({ service }) => {
  return (
    <div class="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={service.img} alt="Shoes" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{service.name}</h2>
        <h4 class="card-title">{service.price}</h4>
        <p>{service.description}</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Book Now !</button>
        </div>
      </div>
    </div>
  );
};

export default Service;
