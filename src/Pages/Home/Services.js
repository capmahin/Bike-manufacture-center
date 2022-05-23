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
      description:
        "The Royal Enfield Bullet has the longest unchanged production run of any motorcycle having remained continuously in production since 1948. The Bullet marque is even older, and has passed 75 years of continuous production.",
      img: engine,
      price: 120000,
    },
    {
      _id: 2,
      name: "Spear",
      description:
        "Robust aluminum anodized for enhanced durability and impact protection. Safeguards vulnerable braking components.",
      img: spear,
      price: 150000,
    },
    {
      _id: 3,
      name: "Wheel",
      description:
        "Its frame was also considerably different, having centre-spring girder front forks, being among a new range of models from Royal Enfield that featured them, along with a saddle-type fuel tank. However, common to motorcycles of this period, it had a rigid rear-end, necessitating a 'sprung' seat for the rider, which resulted in the iconic look of the motorcycle that is much replicated today, even though the sprung seat is unnecessary in modern models.",
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
