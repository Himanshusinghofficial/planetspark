import React,{useState} from "react";
import Bottomdetails from "./components/Bottomdetails";
import Game from "./components/Game";
import Start from "./components/Start";
import Finishgame from "./components/Finishgame";
import { useDispatch, useSelector } from "react-redux";
import {
  selectplayer1,
  selectplayer2,
  selectties,
  selectwin1,
  selectwin2,
  setUserwin1,
  setUserwin2,
  setUsertied,
} from "./features/user";

const Usertouser = () => {
  const dispatch = useDispatch();
  const player1 = useSelector(selectplayer1);
  const player2 = useSelector(selectplayer2);
  const ties = useSelector(selectties);
  const win1 = useSelector(selectwin1);
  const win2 = useSelector(selectwin2);
  
  const [winner, setwinner] = useState(false);
  const [showEndgame, setshowEndgame] = useState(false);
  
    const handleScore = (player) => {
    let winn;
    if (player === "player1") {
      winn = player1;
      let val1=win1+1;
      dispatch(setUserwin1({win1:val1}))
    } else if (player === "player2") {
      winn = player2;
      let val2= win2+1;
      dispatch(setUserwin2({win2:val2}))
    } else {
      winn = "Tied";
      let val3=ties+1
      dispatch(setUsertied({ties:val3}))
    }
    setwinner(winn);
  };

  const handleEndgame = (input) => {
    setshowEndgame(input)
  };
   
  return (
    <div className="App">
       {showEndgame ? (
            <Finishgame 
             winner={winner} 
             endgame={handleEndgame}
            />
        ) : null}
         { player1==="" && player2==="" ? <Start /> : null }
       <Bottomdetails />
       <Game 
         endgame={handleEndgame}
         handleScore={handleScore}
       />
    </div>
  )
}

export default Usertouser

