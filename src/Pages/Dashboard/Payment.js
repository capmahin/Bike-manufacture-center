import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51LENKiHp3x315jSeyFvGhygMloFirqQqvz4AEypfu4NWKrDVNhbwBKr3PW2EMJeSoLka80l7CdRgKn9ClO6QGX0L00jpTtR3JR"
);

const Payment = () => {
  const { id } = useParams();
  const url = `http://localhost:5000/booking/${id}`;

  const { data: order, isLoading } = useQuery(["booking", id], () =>
    fetch(url, {
      method: "GET",
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
      <div class="card w-50  max-w-md  bg-base-100 shadow-xl my-12 ">
        <div class="card-body">
          <p className="text-success"> Hellow, {order.buyerName}</p>
          <h2 class="card-title">Pay for {order.fixing}</h2>
          <p>
            Your Order: <span className="text-orange-800">{order.date}</span>{" "}
            for {order.minimum_quantity}
          </p>
          <p>Please pay: ${order.price}</p>
        </div>
      </div>
      <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
        <div class="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
