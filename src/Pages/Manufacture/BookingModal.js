import React from "react";
import { format } from "date-fns";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { toast } from "react-toastify";

const BookingModal = ({ date, fixing, setFixing, refetch }) => {
  const { _id, name, minimum_quantitys, price } = fixing;
  const [user, loading, error] = useAuthState(auth);
  const formattedDate = format(date, "PP");
  const handleBooking = (event) => {
    event.preventDefault();
    const minimum_quantity = event.target.minimum_quantity.value;
    console.log(_id, name, minimum_quantity);

    const booking = {
      fixingId: _id,
      fixing: name,
      date: formattedDate,
      minimum_quantity,
      price,
      buyer: user.email,
      buyerName: user.displayName,
      phone: event.target.phone.value,
    };
    fetch("https://bike-manufacture-center-server.vercel.app/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          toast(`Booking is done,${formattedDate} to ${minimum_quantity}`);
        } else {
          toast.error(
            `You Already Booking this ,${data.booking?.date} to ${data.booking?.minimum_quantity}`
          );
        }
        refetch();
        setFixing(null);
      });
  };
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="booking-modal"
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
              {minimum_quantitys.map((minimum_quantity, index) => (
                <option key={index} value={minimum_quantity}>
                  {minimum_quantity}
                </option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              disabled
              value={user?.displayName || ""}
              placeholder="Your Name"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="email"
              name="email"
              disabled
              value={user?.email || ""}
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
