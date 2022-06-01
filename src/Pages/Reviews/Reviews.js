import React from "react";

const Reviews = ({ reviews }) => {
  return (
    <div class="card w-96 bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="card-title text-3xl text-purple-700">{reviews.name}</h2>
        <p className="text-2xl">{reviews.price}$</p>
        <p>{reviews.description}</p>
      </div>
      <figure>
        <img src={reviews.img} alt="Bike" />
      </figure>
    </div>
  );
};

export default Reviews;
