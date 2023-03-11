import React from "react";
import services from "../data/services";


function Services() {

  const handleClick = () => {
    console.log("Clicked");
  }



  return (
    <div>

      What you are looking for?

      <ul>
        {services.map((service, index) =>
          <li key={service.id}>
            <div>
              <img width="70px" src={service.image} onClick={handleClick} />
              {service.name}
            </div>
          </li>
        )}
      </ul>

    </div>
  );
}

export default Services;