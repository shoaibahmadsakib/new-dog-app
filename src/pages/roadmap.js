import React from "react";
import Navigation from "../components/Navigation";
import Rodemap from "../assets/rodemap.jpeg";

const roadmap = () => {
  return (
    <div>
      <Navigation />
      <div className="ful_container">
        <div className="rodemap_photo">
          <img src={Rodemap} alt="Rodemap" height="100%" width="100%" />
        </div>
      </div>
    </div>
  );
};

export default roadmap;
