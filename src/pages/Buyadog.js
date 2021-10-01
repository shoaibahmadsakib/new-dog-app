import React from "react";
import Navigation from "../components/Navigation";
import Image1 from "../assets/1.png";
import Image2 from "../assets/2.jpeg";
import Image3 from "../assets/3.jpeg";
import Image4 from "../assets/4.jpeg";

const BuyAnApp = () => {
  return (
    <div>
      <Navigation />
      <div className="ful_container">
        <div className="first_section">
          <div className="first_section1">
            <h1>WELCOME TO THE BORED APE YACHT CLUB</h1>
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

        {/* part 2 */}
        <div className="second_section">
          <div className="second_section1">
            <h1>FAIR DISTRIBUTION</h1>
            <p>
              There are no bonding curves here. Buying a Bored Ape costs 0.08
              ETH. There are no price tiers; BAYC membership costs the same for
              everyone.
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

        <div className="the_space">
          <div className="the_space1">
            <h1>THE SPECS</h1>
            <p>
              Each Bored Ape is unique and programmatically generated from over
              170 possible traits, including expression, headwear, clothing, and
              more. All apes are dope, but some are rarer than others. The apes
              are stored as ERC-721 tokens on the Ethereum blockchain and hosted
              on IPFS. (See Record and Proof.) Purchasing an ape costs 0.08 ETH.
              To access members-only areas such as THE BATHROOM, Apeholders will
              need to be signed into their Metamask Wallet.
            </p>
          </div>
          <div className="the_space2">
            <img src={Image1} alt="" />
          </div>
        </div>
        {/* the bartroom */}

        <div className="barthroom">
          <div className="barthroom_part1">
            <h1>THE BATHROOM</h1>
            <p>
              The BAYC Bathroom will become operational once the presale period
              is over. It contains a canvas accessible only to wallets
              containing at least one ape. Like any good dive bar bathroom, this
              is the place to draw, scrawl, or write expletives. Each ape-holder
              will be able to paint a pixel on the bathroom wall every fifteen
              minutes. Think of it as a collaborative art experiment for the
              cryptosphere. A members-only canvas for the discerning minds of
              crypto twitter. We're pretty sure it's going to be full of dicks.
            </p>
          </div>
          <div className="barthroom_part2">
            <img src={Image1} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyAnApp;
