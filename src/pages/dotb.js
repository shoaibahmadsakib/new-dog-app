import React from "react";
import Navigation from "../components/Navigation";
import Image1 from "../assets/1.jpeg";
import Image2 from "../assets/2.jpeg";
import Image3 from "../assets/3.jpeg";
import Image4 from "../assets/4.jpeg";
import image5 from "../assets/6.jpeg";
import image7 from "../assets/7.jpeg";

import distribution from "../assets/distibution.gif";
import serumMachine from "../assets/serum-machine.gif";
import { DotbData, Serums, Distribution, MutationData } from "../data/DotbData";

const dotb = () => {
  return (
    <div>
      <Navigation />
      <div className="ful_container">
        <div className="first_section">
          {DotbData.map((data) => {
            return (
              <div className="first_section1">
                <h1>{data.dotbHeader}</h1>
                <p>{data.dotbPara}</p>
              </div>
            );
          })}

          <div className="first_section2">
            <div className="four_image">
              <img src={Image1} alt="" />
              <img src={Image2} alt="" />
              <img src={Image3} alt="" />
              <img src={Image4} alt="" />
            </div>
          </div>
        </div>

        {/* second */}

        {Serums.map((data) => {
          return (
            <div className="second_section">
              <div className="second_section1">
                <h1>{data.serumHeader}</h1>
                <p>{data.serumPara}</p>
              </div>
              <div className="second_section2">
                <div className="Note_part">
                  <p>{data.notepart}</p>
                </div>
              </div>
            </div>
          );
        })}

        {/* slide dog */}
        <div className="slide_dog">
          <div className="slide_three_part">
            <div className="first_slide">
              <img src={Image3} alt="" />
              <p>anything</p>
            </div>
            <div className="first_slide">
              <img src={Image4} alt="" />
              <p>anything</p>
            </div>
            <div className="first_slide">
              <img src={Image2} alt="" />
              <p>anything</p>
            </div>
          </div>
        </div>

        {/* distribution section */}

        <div className="distribution_section">
          <div className="distribution_one">
            <img src={distribution} alt="" />
          </div>
          {Distribution.map((data) => {
            return (
              <div className="distribution_two">
                <h1 className="distribution_header">
                  {data.distributionHeader}
                </h1>
                <p className="distribution_part">{data.distributionPara}</p>
              </div>
            );
          })}
        </div>

        {/* mutation section */}

        <div className="mutation">
          {MutationData.map((data) => {
            return (
              <div className="mutation_first">
                <h1 className="mutation_header">{data.mutationHeader}</h1>
                <p className="mutation_para">{data.mutationPara}</p>
              </div>
            );
          })}

          <div className="mutation_second">
            <img src={serumMachine} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default dotb;
