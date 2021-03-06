import React from "react";
import Navigation from "../components/Navigation";
import Image1 from "../assets/1.jpeg";
import image8 from "../assets/8.jpg"
import Image2 from "../assets/2.jpeg";
import Image3 from "../assets/3.jpeg";
import Image4 from "../assets/4.jpeg";
import First from "../assets/first.png"
import Crown from "../assets/crown.png"
import Rocket from "../assets/rocket.png"
import Exclusive from "../assets/exclusive.png"

import Fifth from "../assets/fifth.png";
import {
  BuyDogData,
  Community,
  FairDistribution,
  theBarthroom,
  TheSpace,
  WelcomePart,
} from "../data/BuyDogData";

const BuyAnApp = () => {
  return (
    <div>
      <Navigation />
      <div className="ful_container">
        <div className="header_image_part"></div>
        <div className="first_section">
          {BuyDogData.map((data, key) => {
            return (
              <div key={key} className="first_section1">
                <h1>{data.boredAppHeading}</h1>
                <p>{data.boredAppPara}</p>
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

        {/* part 2 */}

        {FairDistribution.map((data, key) => {
          return (
            <div className="second_section">
              <div key={key} className="second_section1">
                <h1>{data.heade}</h1>
                <p>{data.paragraph}</p>
              </div>

              <div className="second_section2">
                <div className="Note_part">
                  <p>{data.notePart}</p>
                </div>
              </div>
            </div>
          );
        })}

        <div className="the_space">
          {TheSpace.map((data, key) => {
            return (
              <div key={key} className="the_space1">
                <h1>{data.theSpaceHeader}</h1>
                <p>{data.theSpacePara}</p>
              </div>
            );
          })}

          <div className="the_space2">
            <img src={Image1} alt="" />
          </div>
        </div>
        {/* the bartroom */}

        <div className="barthroom">
          {theBarthroom.map((data, key) => {
            return (
              <div className="barthroom_part1">
                <h1>{data.barthroomHeader}</h1>
                <p>{data.barthroompara}</p>
              </div>
            );
          })}

          <div className="barthroom_part2">
            <img src={image8} alt="" />
          </div>
        </div>

        <div className="buy_an_app">
          <div className="three_section">
            <div class="section_1">
              <h3 class="buy-ape-title">BUY A DOTB</h3>
            </div>
            <div class="section_2">
              <p class="common-p mb-lg-0">
                The initial sale has sold out. To get your DOTB, check out the
                collection on MagicEden or DigitalEyes.
              </p>
            </div>
            <div class="section_3">
              <a
                href="https://digitaleyes.market/collections/Dogs%20on%20the%20Block"
                target="_blank"
              >
                <button class="bayc-button1 mint" type="button">
                  BUY A DOTB ON DIGITALEYES
                </button>
                <br></br>
              </a>

              <a
                href="https://magiceden.io/marketplace?collection_symbol=dogs_on_the_block"
                target="_blank"
              >
                <button class="bayc-button1 mint" type="button">
                  BUY A DOTB ON MAGICEDEN
                </button>
              </a>
            </div>
          </div>

          {/* welcome cube part */}
          <div className="welcomeclub">
            <div className="welcome_two_part">
              {WelcomePart.map((data) => {
                return (
                  <div className="welcomw_first_part">
                    <h1 className="welcome_header">{data.welcomeHeader}</h1>
                    <p className="welcome_paragraph">{data.welcomePara}</p>
                  </div>
                );
              })}

              <div className="welcome_second_part">
                <div className="welcome_mainpart">
                  <div className="welcome_image">
                    <img
                      className="welcome_image_size"
                      src={First}
                      alt="welcome image"
                    />
                  </div>
                  <div className="welcome_image_text">
                    <p className="welcome_text">8,888 Unique Hand-drawn Dogs</p>
                  </div>
                </div>

                <div className="welcome_mainpart">
                  <div className="welcome_image">
                    <img
                      className="welcome_image_size"
                      src={Crown}
                      alt="welcome image"
                    />
                  </div>
                  <div className="welcome_image_text">
                    <p className="welcome_text">
                      2.5% Royalties on All Secondary Sales
                    </p>
                  </div>
                </div>

                <div className="welcome_mainpart">
                  <div className="welcome_image">
                    <img
                      className="welcome_image_size"
                      src={Rocket}
                      alt="welcome image"
                    />
                    <div className="welcome_image_text">
                      <p className="welcome_text">
                        Fair Launch With No Presale! All Dogs Cost 0.375 SOL
                      </p>
                    </div>
                  </div>
                </div>

                <div className="welcome_mainpart">
                  <div className="welcome_image">
                    <img
                      className="welcome_image_size"
                      src={Exclusive}
                      alt="welcome image"
                    />
                  </div>
                  <div className="welcome_image_text">
                    <p className="welcome_text">
                      Exclusive Membership Access
                    </p>
                  </div>
                </div>

                <div className="welcome_mainpart">
                  <div className="welcome_image">
                    <img
                      className="welcome_image_size"
                      src={Fifth}
                      alt="welcome image"
                    />
                  </div>
                  <div className="welcome_image_text">
                    <p className="welcome_text">
                      Ownership and Commercial Rights Given to the Holder of the
                      NFT
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* welcome end */}

        {/* communities tools */}
        <div className="communities_tools">
          <div className="community_two_part">
            {Community.map((data) => {
              return (
                <div className="community_first_part">
                  <h1 className="community_heading">{data.communityHeader}</h1>
                  <p className="community_para">{data.communityPara}</p>
                </div>
              );
            })}

            <div className="community_second_part">
              <div className="community_button">
                <div className="button1">
                  <a href="https://howrare.is/dogsontheblock"
                     target="_blank">
                    {" "}
                    <button>HowRare.is</button>
                  </a>
                </div>
                <div className="button2">
                  <a href="https://www.raritymon.com/Collections?collection=dogsontheblock"
                     target="_blank">
                    {" "}
                    <button>RarityMon</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* communities tools end */}
      </div>
    </div>
  );
};

export default BuyAnApp;
