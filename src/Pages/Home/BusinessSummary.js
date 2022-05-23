import React from "react";
import reviews from "../../assets/Pics/quote.svg";
import views from "../../assets/Images/views.webp";
import customers from "../../assets/Images/customers.png";
import annual from "../../assets/Images/annual.png";
import Review from "./Review";

const BusinessSummary = () => {
  const reviews = [
    {
      _id: 1,
      name: "33K+ Reviews",
      reviews: "50 Plus",
      img: views,
    },
    {
      _id: 2,
      name: "served 100+ customers",
      reviews: "50 Plus",
      img: customers,
    },
    {
      _id: 3,
      name: "120M+ Annual revenue",
      reviews: "50 Plus",
      img: annual,
    },
  ];
  return (
    <section className="my-28">
      <div className="flex justify-between">
        <div>
          <h4 className="text-xl text-primary font-bold">Summary</h4>
          <h2 className="text-3xl">What our customers reviews</h2>
        </div>
        <div>
          <img src={reviews} className="w-48 lg:w-48" alt="" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {reviews.map((review) => (
          <Review key={review._id} review={review}></Review>
        ))}
      </div>
    </section>
  );
};

export default BusinessSummary;
