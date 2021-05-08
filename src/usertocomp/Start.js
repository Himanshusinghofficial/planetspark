import React,{ useState } from 'react';
import { useDispatch } from "react-redux";
import {
  setUserDetails,
} from "../features/comp";

const Start = () => {
    const dispatch = useDispatch();
    const [player1, setplayer1] = useState("");

    const addplayer1 = (event) => {
        setplayer1(event.target.value);
      };

    const onclick = (event) => {
        event.preventDefault();
        setUser({ player1 });
      };
    
      const setUser = ({player1}) => {
        dispatch(
          setUserDetails({
            player1: player1
          })
        );
      };
    
    return (
        <div className="wrapper">
            <div className="screen">
                <form>
                <div className="form-group">
                    <label>Enter your Name</label>
                    <input
                        type="name"
                        id="player1"
                        className="form-control"
                        onChange={addplayer1}
                        required="required"
                    />
                </div>
                    <button onClick={onclick} className="btn btn-primary">
                      Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Start
