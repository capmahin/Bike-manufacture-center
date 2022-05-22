import React from "react";
import InfoCard from "./InfoCard";
import location from "../../assets/Pics/location.webp";
import clock from "../../assets/Pics/Clock.webp";
import phone from "../../assets/Pics/phone.webp";

const Info = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 px-12">
      <InfoCard cardTitle="Location" img={location}></InfoCard>
      <InfoCard cardTitle="Opening Hours" img={clock}></InfoCard>
      <InfoCard cardTitle="Contact Us" img={phone}></InfoCard>
    </div>
  );
};

export default Info;
