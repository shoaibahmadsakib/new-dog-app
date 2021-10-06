import React from "react";
import Navigation from "../components/Navigation";
import Image1 from "../assets/1.png";
import Image2 from "../assets/2.jpeg";
import Image3 from "../assets/3.jpeg";
import Image4 from "../assets/4.jpeg";

const dotb = () => {
  return (
    <div>
      <Navigation />
      <div className="ful_container">
        <div className="first_section">
          <div className="first_section1">
            <h1>The Dot b</h1>
            <p>
              BAYC is a collection of 10,000 Bored Ape NFTs—unique digital
              collectibles living on the Ethereum blockchain. Your Bored Ape
              doubles as your Yacht Club membership card, and grants access to
              members-only benefits, the first of which is access to THE
              BATHROOM, a collaborative graffiti board. Future areas and perks
              can be unlocked by the community through roadmap activation.
            </p>
          </div>
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

        <div className="second_section">
          <div className="second_section1">
            <h1>SERUMS (FOR BAYC MEMBERS)</h1>
            <p>
              One way to create a MUTANT is when a Bored Ape ingests a vial of
              mutant serum. There are three tiers of mutant serum vials: M1, M2,
              and Mega Mutant (M3). A snapshot of all Bored Ape token holders
              was taken at 4pm ET on 8/28/21, and all mutant serums that will
              exist have been airdropped at a random distribution to
              corresponding wallets. If a Bored Ape ingests an M1 or M2 serum,
              the resulting MUTANT will retain traits of the original ape. If a
              Bored Ape ingests an M3 serum? Who knows.
            </p>
          </div>
          <div className="second_section2">
            <div className="Note_part">
              <p>
                Note: Thirty apes are being withheld from the sale. These will
                be used for giveaways, puzzle rewards—and for the creators' BAYC
                memberships.
              </p>
            </div>
          </div>
        </div>

        {/* slide dog */}
        <div className="slide_dog">
          <div className="slide_three_part">
            <div className="first_slide">
            <img src={Image1} alt="" />
              <p>sakib</p>
            </div>
            <div className="first_slide">
            <img src={Image1} alt="" />
              <p>sakib</p>
            </div>
            <div className="first_slide">
            <img src={Image1} alt="" />
              <p>sakib</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default dotb;
