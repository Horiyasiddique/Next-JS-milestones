import React from "react";
import Cards from "./Cards";

function Services() {
  return (
    <div id="service-container">
        <div id="serv-head">
        <h1>What I Offer</h1>
        </div>
        
        <div id="services">
      
      <Cards
        service="Responsive Design"
        description="Creating websites that look stunning and function perfectly on all devices from desktops to smartphones."
      />

      <Cards
        service="Modern Frontend Development
"
        description="Building sleek, user-friendly interfaces with cutting-edge technologies."
      />

      <Cards
        service="SEO Friendly"
        description="Designing websites optimized for search engines to boost visibility and attract more users."
      />
    </div>
    </div>
  );
}

export default Services;
