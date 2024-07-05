import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { payment } from "./payment";

const PaymentCarousel = () => {
  const items = payment.map((items) => (
    <img src={items.image} alt="" className=" w-full" />
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

export default PaymentCarousel;
