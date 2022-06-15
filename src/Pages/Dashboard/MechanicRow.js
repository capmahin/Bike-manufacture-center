import React from "react";
import { toast } from "react-toastify";

const MechanicRow = ({ mechanic, index, refetch }) => {
  const { name, specialty, img, email } = mechanic;

  const handleDelete = (email) => {
    fetch(`http://localhost:5000/mechanic/${email}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          toast.success(`Mechanic: ${name} is deleted.`);
          refetch();
        }
      });
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div class="avatar">
          <div class="w-16 rounded">
            <img src={img} alt={name} />
          </div>
        </div>
      </td>
      <td>{name}t</td>
      <td>{specialty}</td>
      <td>
        <button
          onClick={() => handleDelete(email)}
          class="btn btn-xs btn-error"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default MechanicRow;
