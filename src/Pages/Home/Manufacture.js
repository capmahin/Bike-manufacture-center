import React from "react";
import business from "../../assets/Images/business.jpg";
import PrimaryButton from "../Shared/PrimaryButton";

const Manufacture = () => {
  return (
    <section className="flex justify-center items-center">
      <div className="flex-1">
        <img className="rounded-lg shadow-2xl" src={business} alt="" />
      </div>
      <div className="flex-1 p-4">
        <h3 className="text-xl text-primary font-bold">Manufacture</h3>
        <h2 className="text-3xl">Konw It!</h2>
        <p>
          Royal Enfield is an Indian multinational motorcycle manufacturing
          company headquartered in Chennai, Tamil Nadu, India. The company is
          the oldest global motorcycle brand in continuous production, and
          operates manufacturing plants in Chennai in India.
        </p>
        <PrimaryButton>Get Started</PrimaryButton>
      </div>
    </section>
  );
};

export default Manufacture;
