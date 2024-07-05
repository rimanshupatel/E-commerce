import React, { useState } from "react";
import Slider from "react-slick";
import ProductCard from "./ProductCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./style.css";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

const ProductList = ({ data, sectionName }) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4.3,
    slidesToScroll: 4,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <>
      <div className="slider-container mx-auto  px-4">
        <div className="mt-16 mb-4">
          <h2 className="text-4xl text-center font-bold  tracking-tight text-gray-900 capitalize">
            {sectionName}
          </h2>
        </div>

        <Slider {...settings}>
          {data.map((items) => (
            <ProductCard product={items} />
          ))}
        </Slider>
      </div>
    </>
  );
};

export default ProductList;
