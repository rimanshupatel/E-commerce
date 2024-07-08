import React from "react";

const MainProductCard = ({ data }) => {
  const itemDesc = data.title.substring(0, 35);
  return (
    <>
      <div className="px-1 py-2 hover:shadow-lg w-full lg:w-[15rem]">
        <li>
          <div className=" relative">
            <div className="flex flex-col justify-center  w-full  ">
              <img
                src={data.imageUrl}
                alt=""
                className="h-[15rem] w-[15rem ] object-cover object-left-top rounded-md"
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
            <div className=" py-2 px-2">
              <h1 className="font-semibold text-xs uppercase ">
                {/* {title.length > 20 ? `${itemName}....` : title} */}
                {data.brand}
              </h1>

              <p className="text-gray-500 text-sm ">
                {data.title.length > 40 ? `${itemDesc}....` : data.title}
              </p>
              <div className="flex items-center">
                <p className="font-semibold text-sm">
                  ₹<span>{data.price}</span>
                </p>
                <span className="px-2 font-semibold text-sm line-through text-slate-500">
                  ₹1852
                </span>
                <span className="text-sm font-bold text-green-600">{`82% OFF`}</span>
              </div>
            </div>
          </div>
        </li>
      </div>
    </>
  );
};

export default MainProductCard;
