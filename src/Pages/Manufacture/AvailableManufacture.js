import { format } from "date-fns";
import React, { useState, useEffect } from "react";
import Loading from "../Shared/Loading";
import BookingModal from "./BookingModal";
import Service from "./Service";
import { useQuery } from "react-query";

const AvailableManufacture = ({ date }) => {
  const [fixing, setFixing] = useState(null);
  const formattedDate = format(date, "PP");
  const {
    data: services,
    isLoading,
    refetch,
  } = useQuery(["available", formattedDate], () =>
    fetch(
      `https://bike-manufacture-center-server.vercel.app/available?date=${formattedDate}`
    ).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h4 className="text-xl text-secondary text-center my-12">
        Available Manufacture on {format(date, "PP")}
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services?.map((service) => (
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
          refetch={refetch}
        ></BookingModal>
      )}
    </div>
  );
};

export default AvailableManufacture;
