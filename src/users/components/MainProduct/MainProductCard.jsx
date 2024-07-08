import React from "react";

const MainProductCard = ({ data }) => {
  return (
    <>
      <div className="px-3 py-2 hover:shadow-lg w-[15rem]">
        <li>
          <div className=" relative">
            <div className="px-3 flex flex-col justify-center  w-full ">
              <img
                src={data.imageUrl}
                alt=""
                className="w-48 h-64 object-contain object-left-top"
              />
            </div>
            {/* product items rating */}
            <div className="  absolute  top-[225px] left-[9px]">
              <span className="px-3 rating-bg text-black font-semibold text-sm rounded">
                {/* {rating.rate}{" "} */}
                4.5
                <span className="text-base text-green-600">★</span>
              </span>
            </div>
            {/* product item details */}
            <div className=" py-2">
              <h1 className="font-bold text-base  uppercase">
                {/* {title.length > 20 ? `${itemName}....` : title} */}
                {data.brand}
              </h1>

              <p className="text-gray-500 text-sm ">
                {/* {description.length > 20 ? `${itemDesc}....` : description} */}
                testing card
              </p>
              <div className="flex items-center ">
                <p className="font-bold text-base">
                  Rs. <span>1125</span>
                </p>
                <span className="px-2 text-sm line-through text-gray-400">
                  Rs. 1852
                </span>
                <span className=" text-sm  text-red-400">{`(82% OFF)`}</span>
              </div>
            </div>
            <div className=" w-full">
              <button className="py-2  my-2 flex justify-center w-full bg-black text-white text-center">
                add to cart
              </button>
            </div>
          </div>
        </li>
      </div>
    </>
  );
};

export default MainProductCard;
