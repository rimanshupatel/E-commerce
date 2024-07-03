import React from "react";
import MainCarousel from "../../users/components/HomeCarousel/MainCarousel";
import Navigation from "./../../users/components/Navigation/Navigation";

const Homepage = () => {
  return (
    <div>
      <Navigation />
      <MainCarousel />
    </div>
  );
};

export default Homepage;
