import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white w-[16rem] ">
      <div className="mt-6 flex flex-col overflow-hidden shadow-lg">
        <div className="group relative">
          <div className="h-[13rem] w-[16rem] overflow-hidden bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
            <img
              src={product.imageUrl}
              className="h-full w-full object-cover object-top "
            />
          </div>
          <div className="mt-4 flex ">
            <div>
              <h3 className=" text-gray-700 font-semibold text-base">
                {product.brand}
              </h3>
              <p className="mt-1 text-sm text-gray-500">Black</p>
            </div>
            <p className="text-sm font-medium text-gray-900">$35</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
