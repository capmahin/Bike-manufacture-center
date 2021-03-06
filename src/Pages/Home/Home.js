import React from "react";
import Banner from "./Banner";
import BusinessSummary from "./BusinessSummary";
import Footer from "../Shared/Footer";

import Info from "./Info";
import Manufacture from "./Manufacture";
import Services from "./Services";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Info></Info>
      <Services></Services>
      <Manufacture></Manufacture>
      <BusinessSummary></BusinessSummary>
      <Footer></Footer>
    </div>
  );
};

export default Home;
