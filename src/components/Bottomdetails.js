import React from 'react';
import { useSelector } from "react-redux";
import {
  selectplayer1,
  selectplayer2,
  selectties,
  selectwin1,
  selectwin2
} from "../features/user";

const Bottomdetails = () => {
  const player1 = useSelector(selectplayer1);
  const player2 = useSelector(selectplayer2);
  const ties = useSelector(selectties);
  const win1 = useSelector(selectwin1);
  const win2 = useSelector(selectwin2);

  return (
    <div className="navbar">
    <div className="statistics">
      <h2>
        {player1===""?"Player_1":player1}: {win1}
      </h2>
      <h2>
        {player2===""?"Player_2":player2}: {win2}
      </h2>
      <h2>Ties: {ties}</h2>
    </div>
  </div>
  )
}

export default Bottomdetails

