import React from "react";
import { Link } from "react-router-dom";

const Service = ({ service, setFixing }) => {
  const { name, description, img, price, minimum_quantitys } = service;

  return (
    <div className="card w-96  bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className=" text-2xl font-bold text-secondary">{name}</h2>
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
        <div className="card-actions">
          <label
            htmlFor="booking-modal"
            disabled={minimum_quantitys.length === 0}
            onClick={() => setFixing(service)}
            className=" btn btn-secondary text-black uppercase"
          >
            Book!!!
          </label>
        </div>
      </div>
    </div>
  );
};

export default Service;
