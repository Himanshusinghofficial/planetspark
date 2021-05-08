import React from 'react';
import { useSelector } from "react-redux";
import {
  selectplayer1,
  selectties,
  selectwin1,
  selectwin2
} from "../features/comp";

const Bottomdetails = () => {
  const player1 = useSelector(selectplayer1);
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
        {"Computer"}: {win2}
      </h2>
      <h2>Ties: {ties}</h2>
    </div>
  </div>
  )
}

export default Bottomdetails

