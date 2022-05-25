import React from "react";
import { format } from "date-fns";

const BookingModal = ({ date, fixing, setFixing }) => {
  const { _id, name, minimum_quantitys } = fixing;
  const handleBooking = (event) => {
    event.preventDefault();
    const minimum_quantity = event.target.minimum_quantity.value;
    console.log(_id, name, minimum_quantity);
    setFixing(null);
  };
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            for="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg text-secondary">
            Booking For!!:{name}
          </h3>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-3 justify-items-center mt-2"
          >
            <input
              type="text"
              disabled
              value={format(date, "PP")}
              className="input input-bordered w-full max-w-xs"
            />
            <select
              name="minimum_quantity"
              className="select select-bordered w-full max-w-xs"
            >
              {minimum_quantitys.map((minimum_quantity) => (
                <option value={minimum_quantity}>{minimum_quantity}</option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="submit"
              value="submit"
              className="btn btn-secondary w-full max-w-xs"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
