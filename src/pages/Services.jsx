import React from "react";
import services from "../data/services";
import {Redirect} from 'react-router-dom';


function Services() {
 //const history = useNavigate();

  const handleClick = () => {
    window.location = '/salons';
  }



  return (
    <div>

      What you are looking for?

      <ul>
        {services.map((service, index) =>
          <li key={service.id}>
            <div>
             <a><img width="70px" src={service.image} onClick={handleClick} /> 
              {service.name}
              </a> 
            </div>
          </li>
        )}
      </ul>

    </div>
  );
}

export default Services;