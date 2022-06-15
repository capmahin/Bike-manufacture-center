import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import MechanicRow from "./MechanicRow";

const MangeMechanic = () => {
  const {
    data: mechanics,
    isLoading,
    refetch,
  } = useQuery("mechanics", () =>
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
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Specialty</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {mechanics.map((mechanic, index) => (
              <MechanicRow
                key={mechanic._id}
                mechanic={mechanic}
                index={index}
                refetch={refetch}
              ></MechanicRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MangeMechanic;
