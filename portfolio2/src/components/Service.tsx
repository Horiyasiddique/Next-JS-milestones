import React from "react";
import ServiceCard from "./ServiceCard";

function Service() {
  return (
    <div className="max-w-screen min-h-screen py-14 px-10 flex flex-col gap-8">
      <div className="flex justify-center items-center">
        <h1 className="py-2 text-4xl text-black comfortaa-semibold border-b-2 border-[#FDC435]">
          What I Offer
        </h1>
      </div>
      <div className="flex justify-center gap-6 items-center flex-wrap">
        <ServiceCard
          service="Responsive Design"
          serviceDescription="Creating websites that look stunning and function perfectly on all devices from desktops to smartphones."
          bgColor="#fb6f92"
        />

        <ServiceCard
          service="Modern Frontened Development"
          serviceDescription="Creating websites that look stunning and function perfectly on all devices from desktops to smartphones."
          bgColor="#98cae4"
        />

        <ServiceCard
          service="SEO Friendly"
          serviceDescription="Creating websites that look stunning and function perfectly on all devices from desktops to smartphones."
          bgColor="#fb8500"
        />
      </div>
    </div>
  );
}

export default Service;
