import React from "react";
import MainCarousel from "../../users/components/HomeCarousel/MainCarousel";
import HomeProductList from "../../users/components/HomeProductList/HomeProductList";
import men_shirt from "../../data/Men/men_shirt.json";
import men_jeans from "../../data/Men/men_jeans.json";
import { dressPage1 } from "../../data/dress/page1";
import { kurtaPage1 } from "../../data/Kurta/kurta";
import PaymentCarousel from "../../users/components/PaymentCarousel/PaymentCarousel";
import TermConditon from "../../users/components/Term&Condition/TermConditon";
import { mens_kurta } from "../../data/Men/men_kurta";
const Homepage = () => {
  return (
    <div>
      <MainCarousel />
      <PaymentCarousel />
      <div className="px-16  ">
        <HomeProductList data={dressPage1} sectionName={"Must. Have. Today"} />
        <HomeProductList data={men_shirt} sectionName={"Top pick for men"} />
        <HomeProductList
          data={mens_kurta}
          sectionName={"Hot style, on repeat"}
        />
        <HomeProductList
          data={kurtaPage1}
          sectionName={"Hot style, on repeat"}
        />
        <TermConditon />
      </div>
    </div>
  );
};

export default Homepage;
