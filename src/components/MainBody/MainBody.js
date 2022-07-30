import React from "react";
import FilterSection from "../FilterSection/FilterSection";
import Services from "../Services/Services";
import Subscription from "../Subscription/Subscription";

const MainBody = () => {
  return (
    <div className="grid lg:grid-cols-4 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-1  sm:mt-56 gap-4 lg:mt-28 xl:mt-28 md:mt-32 mt-56">
      <div className="border display">
        <FilterSection />
      </div>
      <div className="lg:col-span-2 xl:col-span-2 ">
        <Services />
      </div>
      <div className="border-l-2 flex justify-center ">
        <Subscription />
      </div>
    </div>
  );
};

export default MainBody;
