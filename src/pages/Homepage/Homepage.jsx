import React from "react";
import MainCarousel from "../../users/components/HomeCarousel/MainCarousel";
import Navigation from "./../../users/components/Navigation/Navigation";
import ProductList from "../../users/components/ProductList/ProductList";

const Homepage = () => {
  return (
    <div>
      <Navigation />
      <MainCarousel />

      <div className="mx-auto px-4 py-16 ">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center tracking-tight text-gray-900 capitalize">
            Top pick for men
          </h2>

          <ProductList />
        </div>

        <div className="my-16">
          <h2 className="text-4xl text-center font-bold  tracking-tight text-gray-900 capitalize">
            Must. Have. Today
          </h2>

          <ProductList />
        </div>
        <div className="my-16">
          <h2 className="text-4xl text-center font-bold tracking-tight text-gray-900 capitalize">
            Hot style, on repeat
          </h2>

          <ProductList />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
