import React from "react";
import Bike1 from "../../assets/Reviews/Bike1.jpg";
import Bike2 from "../../assets/Reviews/Bike2.webp";
import Bike3 from "../../assets/Reviews/Bike3.jpg";
import Bike4 from "../../assets/Reviews/Bike4.webp";
import Bike5 from "../../assets/Reviews/Bike5.webp";
import Bike6 from "../../assets/Reviews/Bike6.jpeg";
import Reviews from "./Reviews";

const Review1 = () => {
  const review = [
    {
      _id: 1,
      name: "Royal Enfield 1",
      description:
        "Royal Enfield is an Indian multinational motorcycle manufacturing company headquartered in Chennai, Tamil Nadu, India. The company is the oldest global motorcycle brand in continuous production, and operates manufacturing plants in Chennai in India.",
      img: Bike1,
      price: 120000,
    },
    {
      _id: 2,
      name: "Royal Enfield 2",
      description:
        "Royal Enfield is an Indian multinational motorcycle manufacturing company headquartered in Chennai, Tamil Nadu, India. The company is the oldest global motorcycle brand in continuous production, and operates manufacturing plants in Chennai in India.",
      img: Bike2,
      price: 120000,
    },
    {
      _id: 3,
      name: "Royal Enfield 3",
      description:
        "Royal Enfield is an Indian multinational motorcycle manufacturing company headquartered in Chennai, Tamil Nadu, India. The company is the oldest global motorcycle brand in continuous production, and operates manufacturing plants in Chennai in India.",
      img: Bike3,
      price: 220000,
    },
    {
      _id: 4,
      name: "Royal Enfield 4",
      description:
        "Royal Enfield is an Indian multinational motorcycle manufacturing company headquartered in Chennai, Tamil Nadu, India. The company is the oldest global motorcycle brand in continuous production, and operates manufacturing plants in Chennai in India.",
      img: Bike4,
      price: 420000,
    },
    {
      _id: 5,
      name: "Royal Enfield 5",
      description:
        "Royal Enfield is an Indian multinational motorcycle manufacturing company headquartered in Chennai, Tamil Nadu, India. The company is the oldest global motorcycle brand in continuous production, and operates manufacturing plants in Chennai in India.",
      img: Bike5,
      price: 620000,
    },
    {
      _id: 6,
      name: "Royal Enfield 6",
      description:
        "Royal Enfield is an Indian multinational motorcycle manufacturing company headquartered in Chennai, Tamil Nadu, India. The company is the oldest global motorcycle brand in continuous production, and operates manufacturing plants in Chennai in India.",
      img: Bike6,
      price: 720000,
    },
  ];
  return (
    <div>
      <div className="text-center ">
        <h2 className="text-primary text-2xl font-bold uppercase">
          Our Bike Reviews
        </h2>
      </div>
      <div className="flex grid sm.grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {review.map((reviews) => (
          <Reviews key={reviews._id} reviews={reviews}></Reviews>
        ))}
      </div>
    </div>
  );
};

export default Review1;
