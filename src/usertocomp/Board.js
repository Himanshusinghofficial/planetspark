import React from 'react';

const Board = (props) => {

  let allTiles = [];
  const generateTiles = () => {
    for (let i = 0; i < 9; i++) {
      allTiles.push("tile not-played");
    }
    return allTiles;
  };

  const handleClick = (event) => {
    const { handleScore, endgame } = props;
    let tile = event.target;
    if (tile.classList.length === 2) {
      play(tile);
    }

    let allTiles = document.getElementsByClassName("not-played");
    if (allTiles.length < 1) {
      handleScore("ties");
      endgame(true);
      reset();
    }
  };

  function play(tile) {
    const { player1, turn, handleScore, endgame } = props;
    tile.classList.remove("not-played");
    if (player1) {
      tile.innerHTML = "X";
      turn(false, true);
      if (diagonal("X") || row("X") || column("X")) {
        handleScore("player1");
        endgame(true);
        reset();
      }
      computerturn(tile)
    }
  };

  function computerturn(tile){
    const { player2, turn, handleScore, endgame } = props;
    tile.classList.remove("not-played");
    if (player2) {
       console.log("Hello")
      for (let i = 0; i < 9; i++) {
        if(allTiles.innerHTML === ""){
          tile.innerHTML = "O";
          break;
        }
      }
      turn(true, false);
      if (diagonal("O") || row("O") || column("O")) {
        handleScore("computer");
        endgame(true);
        reset();
      }
    }
  }


  const diagonal = (play) => {
    let left = [
      document.getElementById("tile0").innerHTML,
      document.getElementById("tile4").innerHTML,
      document.getElementById("tile8").innerHTML,
    ];
    let right = [
      document.getElementById("tile2").innerHTML,
      document.getElementById("tile4").innerHTML,
      document.getElementById("tile6").innerHTML,
    ];

    if (left[0] === play && left[1] === play && left[2] === play) {
      return true;
    }
    if (right[0] === play && right[1] === play && right[2] === play) {
      return true;
    }
    return false;
  };

  const row = (play) => {
    let row1 = [
      document.getElementById("tile0").innerHTML,
      document.getElementById("tile1").innerHTML,
      document.getElementById("tile2").innerHTML,
    ];
    let row2 = [
      document.getElementById("tile3").innerHTML,
      document.getElementById("tile4").innerHTML,
      document.getElementById("tile5").innerHTML,
    ];
    let row3 = [
      document.getElementById("tile6").innerHTML,
      document.getElementById("tile7").innerHTML,
      document.getElementById("tile8").innerHTML,
    ];

    if (row1[0] === play && row1[1] === play && row1[2] === play) {
      return true;
    }
    if (row2[0] === play && row2[1] === play && row2[2] === play) {
      return true;
    }
    if (row3[0] === play && row3[1] === play && row3[2] === play) {
      return true;
    }
    return false;
  };

  const column = (play) => {
    let column1 = [
      document.getElementById("tile0").innerHTML,
      document.getElementById("tile3").innerHTML,
      document.getElementById("tile6").innerHTML,
    ];
    let column2 = [
      document.getElementById("tile1").innerHTML,
      document.getElementById("tile4").innerHTML,
      document.getElementById("tile7").innerHTML,
    ];
    let column3 = [
      document.getElementById("tile2").innerHTML,
      document.getElementById("tile5").innerHTML,
      document.getElementById("tile8").innerHTML,
    ];

    if (column1[0] === play && column1[1] === play && column1[2] === play) {
      return true;
    }
    if (column2[0] === play && column2[1] === play && column2[2] === play) {
      return true;
    }
    if (column3[0] === play && column3[1] === play && column3[2] === play) {
      return true;
    }
    return false;
  };

  const reset = () => {
    let allTiles = document.getElementsByClassName("tile");
    for (let i = 0; i < allTiles.length; i++) {
      allTiles[i].innerHTML = "";
      allTiles[i].classList.add("not-played");
    }
  };


  return (
       <div className="board">
        {generateTiles().map((element, i) => {
          return (
            <div
              id={`tile${i}`}
              key={i}
              className={element}
              onClick={handleClick}
            />
          );
        })}
      </div>
    
  )
}

export default Board
