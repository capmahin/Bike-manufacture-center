import React from "react";
import { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import DeleteConfirmModal from "./DeleteConfirmModal";
import MechanicRow from "./MechanicRow";

const MangeMechanic = () => {
  const [deletingMechanic, setDeletingMechanic] = useState(null);
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
                setDeletingMechanic={setDeletingMechanic}
              ></MechanicRow>
            ))}
          </tbody>
        </table>
      </div>
      {deletingMechanic && (
        <DeleteConfirmModal
          deletingMechanic={deletingMechanic}
          refetch={refetch}
          setDeletingMechanic={setDeletingMechanic}
        ></DeleteConfirmModal>
      )}
    </div>
  );
};

export default MangeMechanic;
