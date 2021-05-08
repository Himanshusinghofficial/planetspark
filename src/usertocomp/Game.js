import React,{useState} from "react";
import Board from "./Board";
import { useSelector } from "react-redux";
import {
  selectplayer1,
} from "../features/comp";

const Game = (props) => {
  const userName1 = useSelector(selectplayer1);
  
  const [player1, setplayer1] = useState(true);
  const [player2, setplayer2] = useState(false);

  const handleTurn = (firstBoolean, secondBoolean) => {
    setplayer1(firstBoolean);
    setplayer2(secondBoolean);
  };

  return (
      <div className="game">
        <p>Its {player1 ? userName1 : "Computer"}'s turn </p>
        <Board
          turn={handleTurn}
          player1={player1}
          player2={player2}
          handleScore={props.handleScore}
          endgame={props.endgame}
        />
      </div>
  )
}

export default Game

