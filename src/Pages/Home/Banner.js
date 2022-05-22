import React from "react";
import bike from "../../assets/Images/Royal-enfield.jpg";

const Banner = () => {
  return (
    <div class="hero min-h-screen px-12 ">
      <div class="hero-content flex-col lg:flex-row">
        <img src={bike} class="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 class="text-5xl font-bold">Royal-Enfield Is hare</h1>
          <p class="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button class="btn btn-primary uppercase text-black font-bold bg-gradient-to-r from-gray-400 to-blue-500 hover:from-blue-500 hover:to-gray-500">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
