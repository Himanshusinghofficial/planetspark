import React from 'react'

const Finishgame = (props) => {

  const handleClick = () => {
    props.endgame(false);
  };
  return (
      <div className="wrapper">
        <div className="screen">
          <p style={{textTransform: "capitalize"}}> { props.winner === "Tied" ? "You guys tied" : `You win ${props.winner} !!`} </p>
          <button className="btn btn-primary" onClick={handleClick}>
            Wanna try again?
          </button>
        </div>
      </div>
  )
}

export default Finishgame
