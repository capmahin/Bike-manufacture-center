import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";

const MangeMechanic = () => {
  const { data: mechanics, isLoading } = useQuery("mechanics", () =>
    fetch("http://localhost:5000/mechanic", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h2 className="text-2xl">Manage Mechanic:{mechanics.length}</h2>
    </div>
  );
};

export default MangeMechanic;
