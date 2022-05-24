import React from "react";
import bike from "../../assets/Images/bike.jpg";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const ManufactureBanner = ({ date, setDate }) => {
  return (
    <div class="hero min-h-screen">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img src={bike} class="max-w-sm rounded-lg shadow-2xl" alt="biker" />
        <div>
          <DayPicker mode="single" selected={date} onSelect={setDate} />
        </div>
      </div>
    </div>
  );
};

export default ManufactureBanner;
