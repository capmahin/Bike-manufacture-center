import React from "react";
import bike from "../../assets/Images/Royal.jpg";
import PrimaryButton from "../Shared/PrimaryButton";

const Banner = () => {
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row">
        <img src={bike} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">Royal-Enfield Is hare</h1>
          <p className="py-6">
            The first Royal Enfield motorcycle was built in 1901. The Enfield
            Cycle Company is responsible for the design and original production
            of the Royal Enfield Bullet, the longest-lived motorcycle design in
            history. Royal Enfield's spare parts operation was sold to Velocette
            in 1967, which benefitted from the arrangement for three years until
            their closure in early 1971. Enfield's remaining motorcycle business
            became part of Norton Villiers in 1967 with the business eventually
            closing in 1978.
          </p>
          <PrimaryButton>Get Started</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Banner;
