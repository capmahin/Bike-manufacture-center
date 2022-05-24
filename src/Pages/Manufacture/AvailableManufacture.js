import { format } from "date-fns";
import React from "react";

const AvailableManufacture = ({ date }) => {
  return (
    <div>
      <h4 className="text-xl text-secondary text-center">
        Available Manufacture on {format(date, "PP")}
      </h4>
    </div>
  );
};

export default AvailableManufacture;
