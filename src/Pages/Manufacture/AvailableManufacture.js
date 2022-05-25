import { format } from "date-fns";
import React, { useState, useEffect } from "react";
import BookingModal from "./BookingModal";
import Service from "./Service";

const AvailableManufacture = ({ date }) => {
  const [services, setServices] = useState([]);
  const [fixing, setFixing] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/service")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <h4 className="text-xl text-secondary text-center my-12">
        Available Manufacture on {format(date, "PP")}
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((service) => (
          <Service
            key={service._id}
            service={service}
            setFixing={setFixing}
          ></Service>
        ))}
      </div>
      {fixing && (
        <BookingModal
          date={date}
          fixing={fixing}
          setFixing={setFixing}
        ></BookingModal>
      )}
    </div>
  );
};

export default AvailableManufacture;
