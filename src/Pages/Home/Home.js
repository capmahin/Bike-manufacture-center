import React from "react";
import Banner from "./Banner";
import BusinessSummary from "./BusinessSummary";

import Info from "./Info";
import Manufacture from "./Manufacture";
import Services from "./Services";

const Home = () => {
  return (
    <div className="px-12">
      <Banner></Banner>
      <Info></Info>
      <Services></Services>
      <Manufacture></Manufacture>
      <BusinessSummary></BusinessSummary>
    </div>
  );
};

export default Home;
