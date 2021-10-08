import React from "react";
import Navigation from "../components/Navigation";
import { TermData } from "../data/TermConditionData";

const Termscondition = () => {
  return (
    <div>
      <Navigation />
      <div className="condition_container" id="terms">
        {TermData.map((data, key) => {
          return (
            <div key={key}>
              <h1>TERMS &amp; CONDITIONS</h1>
              <p class="terms-description">{data.termsDescription1}</p>
              <p class="terms-description">{data.termsDescription2}</p>
              <h2>OWNERSHIP</h2>
              <p class="terms-description">{data.termsDescription3}</p>
              <p class="terms-description">{data.termsDescription4}</p>
              <p class="terms-description">{data.termsDescription5}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Termscondition;
