import React, { useState } from "react";
import Footer from "../Shared/Footer";
import AvailableManufacture from "./AvailableManufacture";
import ManufactureBanner from "./ManufactureBanner";

const Manufacture = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div>
      <ManufactureBanner date={date} setDate={setDate}></ManufactureBanner>
      <AvailableManufacture date={date}></AvailableManufacture>
      <Footer></Footer>
    </div>
  );
};

export default Manufacture;
