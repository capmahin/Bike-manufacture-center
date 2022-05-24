import React from "react";

const Service = ({ service }) => {
  const { name, description, img, price, minimum_quantity } = service;
  return (
    <div class="card w-96 bg-base-100 shadow-xl">
      <figure class="px-10 pt-10">
        <img src={img} alt="" class="rounded-xl" />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title text-secondary">{name}</h2>
        <p>{description}</p>
        <h4>{price}</h4>
        <h4>
          {minimum_quantity.length > 0 ? (
            <span>{minimum_quantity[0]}</span>
          ) : (
            <span className="text-red-500">No Quantity Available</span>
          )}
        </h4>
        <h4>
          {minimum_quantity.length}
          {minimum_quantity.length > 1 ? "spaces" : "spaces"} available
        </h4>
        <div class="card-actions">
          <button
            disabled={minimum_quantity.length === 0}
            class="btn btn-secondary text-black uppercase"
          >
            Book Now!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;
