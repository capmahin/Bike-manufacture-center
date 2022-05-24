import React from "react";

const Service = ({ service, setFixing }) => {
  const { name, description, img, price, minimum_quantitys } = service;
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
          {minimum_quantitys.length > 0 ? (
            <span>{minimum_quantitys[0]}</span>
          ) : (
            <span className="text-red-500">No Quantity Available</span>
          )}
        </h4>
        <h4>
          {minimum_quantitys.length}
          {minimum_quantitys.length > 1 ? "spaces" : "spaces"} available
        </h4>
        <div class="card-actions">
          <label
            for="booking-modal"
            disabled={minimum_quantitys.length === 0}
            onClick={() => setFixing(service)}
            class=" btn btn-secondary text-black uppercase"
          >
            Book Now!
          </label>
        </div>
      </div>
    </div>
  );
};

export default Service;
