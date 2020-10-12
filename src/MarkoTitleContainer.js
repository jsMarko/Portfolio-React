import React from "react";
import logo from "./images/marko.png";

function MarkoTitleContainer() {
   return (
      <div>
         <img className="marko-logo" src={logo} alt="Logo" />
         <p className="nick-name">"Nickname given by my Father"</p>
      </div>
   );
}

export default MarkoTitleContainer;
