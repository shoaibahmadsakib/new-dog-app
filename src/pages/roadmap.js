import React from "react";
import Navigation from "../components/Navigation";
import Roadmap from "../assets/roadmap.jpeg";

const roadmap = () => {
  return (
    <div>
      <Navigation />
      <div className="ful_container">
        <div className="roadmap_photo">
          <img src={Roadmap} alt="Roadmap" height="100%" width="100%" />
        </div>
      </div>
    </div>
  );
};

export default roadmap;
