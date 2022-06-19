import React from "react";
import { toast } from "react-toastify";

const MechanicRow = ({ mechanic, index, refetch, setDeletingMechanic }) => {
  const { name, specialty, img, email } = mechanic;

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
        <label
          onClick={() => setDeletingMechanic(mechanic)}
          for="delete-confirm-modal"
          class="btn btn-xs btn-error"
        >
          Delete
        </label>
      </td>
    </tr>
  );
};

export default MechanicRow;
