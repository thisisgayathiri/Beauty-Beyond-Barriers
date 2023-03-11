import React from "react";
import  services from "../data/services";

function Services() {
  return (
    <div>

        What you are looking for?
        <ul>
      {services.map((item,i) => 
        <li key={i}>{item.name}</li>
      )}
      </ul>

       
    </div>
  );
}

export default Services;