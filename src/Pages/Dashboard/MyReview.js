import React from "react";
import Engine from "../../assets/Images/1.jpg";
import Wheal from "../../assets/Images/2.jpg";
import Spear from "../../assets/Images/3.webp";

const MyReview = () => {
  return (
    <div className="p-2 w-10">
      <h2 className="text-3xl">My Reviews</h2>
      <div class="card w-96 bg-base-100 shadow-xl p-2">
        <div class="card-body">
          <h2 class="card-title">Engine</h2>
          <p>
            A motorcycle engine is an engine that powers a motorcycle.
            Motorcycle engines are typically two-stroke or four-stroke internal
            combustion engines, but other engine types, such as Wankels and
            electric motors, have been used.
          </p>
        </div>
        <figure>
          <img src={Engine} alt="Shoes" />
        </figure>
      </div>
      <div>
        <div class="card w-96 bg-base-100 shadow-xl p-2s">
          <div class="card-body">
            <h2 class="card-title">Wheal</h2>
            <p>
              Motorcycle wheels are made to cope with radial and axial forces.
              They also provide a way of mounting other critical components such
              as the brakes, final drive and suspension. Wheels, and anything
              directly connected to them, are considered to be unsprung mass.
              Traditionally motorcycles used wire-spoked wheels with inner tubes
              and pneumatic tyres. Although cast wheels were first used on a
              motorcycle in 1927, it would not be until the 1970s that
              mainstream manufacturers would start to introduce cast wheels on
              their roadgoing motorcycles.
            </p>
          </div>
          <figure>
            <img src={Wheal} alt="Shoes" />
          </figure>
        </div>
      </div>
      <div>
        <div class="card w-96 bg-base-100 shadow-xl p-2">
          <div class="card-body">
            <h2 class="card-title">Spear</h2>
            <p>
              The frame includes the head tube that holds the front fork and
              allows it to pivot. Some motorcycles include the engine as a
              load-bearing stressed member; this has been used all through
              motorcycle history but is now becoming more common.
            </p>
          </div>
          <figure>
            <img src={Spear} alt="Shoes" />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default MyReview;
