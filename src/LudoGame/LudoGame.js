import React, { useState } from "react";
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
    left: "-5%",
    position: "absolute",
    top: "10%",
  };
  let iconStyles1 = {
    fontSize: "1.5em",
    right: "-5%",
    position: "absolute",
    top: "10%",
  };
  let iconStyles2 = {
    fontSize: "1.5em",
    left: "-5%",
    top: "30%",
    position: "absolute",
  };
  let iconStylesFlag = {
    fontSize: "1.5em",
    right: "-5%",
    top: "30%",
    position: "absolute",
  };
  const totalNumber = 60;
  const [diceNumber, setDiceNumber] = useState(0);
  const [playerOne, setPlayerOne] = useState(0);
  const [playerTwo, setPlayerTwo] = useState(0);
  const [playerOneScore, setPlayerOneScore] = useState(0);
  const [playerTwoScore, setPlayerTwoScore] = useState(0);
  const [isPlayerOne, setIsPlayerOne] = useState(true);
  const [isGameOver, setIsGameOver] = useState(false);

  const changeImage = () => {
    const randomNumber = Math.floor(Math.random() * images.length);
    setDiceNumber(randomNumber);
    if (!isGameOver) {
      if (isPlayerOne) {
        const playerOneTotal =
          ((playerOneScore + randomNumber + 1) / totalNumber) * 90;
        if (playerOneTotal >= 90) {
          setIsGameOver(true);
        }
        setPlayerOne(playerOneTotal);
        setPlayerOneScore(playerOneScore + randomNumber + 1);
        setIsPlayerOne(!isPlayerOne);
      } else {
        const playerTwoTotal =
          ((playerTwoScore + randomNumber + 1) / totalNumber) * 90;
        if (playerTwoTotal >= 90) {
          setIsGameOver(true);
        }
        setPlayerTwoScore(playerTwoScore + randomNumber + 1);
        setPlayerTwo(playerTwoTotal);
        setIsPlayerOne(!isPlayerOne);
      }
    }
  };

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
              left: `${playerOne}%`,
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
        <div>
          <div>
            <MdLocationOn style={iconStyles2} />
          </div>
          <div
            style={{
              position: "absolute",
              left: `${playerTwo}% `,
            }}
          >
            <img src={player2} alt="" />
          </div>
          <div>
            <BsFlagFill style={iconStylesFlag} />
          </div>
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
          <p>Aman Singh : {playerOneScore}</p>
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
          <p>Ansi Singh : {playerTwoScore}</p>
        </div>
        <div>
          <img src={player2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default LudoGame;
