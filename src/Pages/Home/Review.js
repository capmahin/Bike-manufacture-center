import React from "react";

const Review = ({ review }) => {
  return (
    <div class="card lg:max-w-lg bg-base-100 shadow-xl">
      <div class="card-body">
        <p>
          In 1990, Royal Enfield collaborated with the Eicher Group, an
          automotive company in India, and merged with it in 1994. Apart from
          bikes, Eicher Group is involved in the production and sales of
          commercial vehicles and automotive gears. Although Royal Enfield
          experienced difficulties in the 1990s, and ceased motorcycle
          production at their Jaipur factory in 2002
        </p>
        <div class="">
          <div class="avatar">
            <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={review.img} alt="" />
            </div>
          </div>
          <div>
            <h4 className="text-xl">{review.name}</h4>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
