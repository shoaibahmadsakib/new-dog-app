import React from "react";
import Navigation from "../components/Navigation";
import Image1 from "../assets/1.png"
import Image2 from "../assets/2.jpeg"
import Image3 from "../assets/3.jpeg"
import Image4 from "../assets/4.jpeg"

const BuyAnApp = () => {
  return (
    <div>
      <Navigation />
      <div className="ful_container">
        <div className="first_section">
          <div className="first_section1">
            <h1>WELCOME TO THE
BORED APE YACHT CLUB</h1>
            <p>BAYC is a collection of 10,000 Bored Ape NFTs—unique digital collectibles living on the Ethereum blockchain. Your Bored Ape doubles as your Yacht Club membership card, and grants access to members-only benefits, the first of which is access to THE BATHROOM, a collaborative graffiti board. Future areas and perks can be unlocked by the community through roadmap activation.</p>
          </div>
          <div className="first_section2">
            <div className="four_image">
                <img src={Image1} alt=""  height="200px" width="200px" />
                <img src={Image2} alt=""  height="200px" width="200px"/>
                <img src={Image3} alt="" height="200px" width="200px" />
                <img src={Image4} alt=""  height="200px" width="200px"/>
            </div>
          </div>
        </div>


{/* part 2 */}
<div className="second_section">
          <div className="second_section1">
            <h1>FAIR DISTRIBUTION</h1>
            <p>There are no bonding curves here. Buying a Bored Ape costs 0.08 ETH. There are no price tiers; BAYC membership costs the same for everyone.</p>
          </div>
          <div className="second_section2">
            <div className="Note_part">
              <p>Note: Thirty apes are being withheld from the sale. These will be used for giveaways, puzzle rewards—and for the creators' BAYC memberships.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default BuyAnApp;
