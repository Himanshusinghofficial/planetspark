import React,{ useState } from 'react';
import { useDispatch } from "react-redux";
import {
  setUserDetails,
} from "../features/user";

const Start = () => {
    const dispatch = useDispatch();
    const [player1, setplayer1] = useState("");
    const [player2, setplayer2] = useState("");
    const [window, setwindow] = useState(false);

    const addplayer1 = (event) => {
        setplayer1(event.target.value);
      };

    const addplayer2 = (event) => {
        setplayer2(event.target.value);
    }
    
    const onclick = (event) => {
        event.preventDefault();
        setwindow(!window);
        setUser({ player1, player2, window });
      };
    
      const setUser = ({player1, player2, window}) => {
        dispatch(
          setUserDetails({
            player1: player1,
            player2: player2,
            window: window
          })
        );
      };
    
    return (
        <div className="wrapper">
            <div className="screen">
                <form>
                <div className="form-group">
                    <label>Name Player1</label>
                    <input
                        type="name"
                        id="player1"
                        className="form-control"
                        onChange={addplayer1}
                        required="required"
                    />

                    <label>Name Player2</label>
                    <input
                        type="name"
                        id="player2"
                        className="form-control"
                        onChange={addplayer2}
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
