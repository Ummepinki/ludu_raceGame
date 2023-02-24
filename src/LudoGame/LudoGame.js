import React, { useEffect, useState } from "react";
import "./LudoGame.css";
import player1 from "../Image/Player1.jpg";
import player2 from "../Image/player2.jpg";
import dice1 from "../Image/dice1.png";
import dice2 from "../Image/dice2.png";
import dice3 from "../Image/dice3.png";
import dice4 from "../Image/dice4.png";
import dice5 from "../Image/dice5.png";
import dice6 from "../Image/dice6.png";
import { MdLocationOn } from "react-icons/md";
import { BsFlagFill } from "react-icons/bs";

const images = [dice1, dice2, dice3, dice4, dice5, dice6];

const LudoGame = () => {
  let iconStyles = {
    fontSize: "1.5em",
    left: "0%",
    position: "absolute",
    top: "10%",
  };
  let iconStyles1 = {
    fontSize: "1.5em",
    right: "0%",
    position: "absolute",
    top: "10%",
  };
  let iconStyles2 = {
    fontSize: "1.5em",
    left: "0%",
    top: "30%",
    position: "absolute",
  };
  let iconStylesFlag = {
    fontSize: "1.5em",
    right: "0%",
    top: "30%",
    position: "absolute",
  };
  const [diceNumber, setDiceNumber] = useState(
    Math.floor(Math.random() * 6) + 1
  );

  const changeImage = () => {
    const randomNumber = Math.floor(Math.random() * images.length);
    setDiceNumber(randomNumber);
  };

  useEffect(() => changeImage(), []);

  // function dice() {
  // const dice = Math.floor(Math.random() * 6) + 1;
  // const play1dice = `image/dice${dice}.png`;
  //console.log(play1dice);
  //document.getElementById("check").setAttribute("src", play1dice);
  //}

  return (
    <div>
      <div className="player1">
        <div>
          <div>
            <MdLocationOn style={iconStyles} />
          </div>
          <div
            style={{
              position: "absolute",
              left: `${diceNumber * 10}px`,
              top: "4%",
            }}
          >
            <img src={player1} alt="player1" />
          </div>
          <div>
            <BsFlagFill style={iconStyles1} />
          </div>
        </div>
        <hr color="black" width="100%" />
      </div>
      <div className="player2">
        <div className="image1">
          <MdLocationOn style={iconStyles2} /> <img src={player2} alt="" />
          <BsFlagFill style={iconStylesFlag} />
        </div>
        <hr color="black" width="100%" />
      </div>

      <div className="straight-line">
        <hr color="black" width="50%" />
      </div>
      <div className="dice">
        <div>
          <img src={player1} alt="player1" />
        </div>
        <div className="text">
          <p>Aman Singh</p>
        </div>
        <div>
          <img
            onClick={changeImage}
            src={images[diceNumber]}
            alt=""
            id="check"
          />
        </div>
        <div className="text">
          <p>Ansi Singh</p>
        </div>
        <div>
          <img src={player2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default LudoGame;
