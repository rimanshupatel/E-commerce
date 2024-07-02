import React from "react";
import AliceCarousel from "react-alice-carousel";
import { HomeCarouselData } from "./HomeCarouselData.js";
import "react-alice-carousel/lib/alice-carousel.css";
const MainCarousel = () => {
  const items = HomeCarouselData.map((items) => (
    <img src={items.image} alt="" className="cursor-pointer h-[30rem] w-full" />
  ));

  return (
    <AliceCarousel
      items={items}
      controlsStrategy="alternate"
      autoPlay
      autoPlayInterval={1500}
      infinite
      disableButtonsControls
    />
  );
};

export default MainCarousel;
