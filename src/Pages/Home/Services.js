import React from "react";
import engine from "../../assets/Images/engine.jpg";
import spear from "../../assets/Images/Spear.jpg";
import wheel from "../../assets/Images/wheel.png";
import Service from "./Service";

const Services = () => {
  const services = [
    {
      _id: 1,
      name: "Engine",
      description: "",
      img: engine,
      price: 120000,
    },
    {
      _id: 2,
      name: "Spear",
      description: "",
      img: spear,
      price: 150000,
    },
    {
      _id: 3,
      name: "Wheel",
      description: "",
      img: wheel,
      price: 110000,
    },
  ];
  return (
    <div className="my-28">
      <div className="text-center ">
        <h2 className="text-primary text-xl font-bold uppercase">
          Our Services
        </h2>
        <h2 className="text-4xl">Service we provide</h2>
      </div>
      <div className="grid sm.grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
