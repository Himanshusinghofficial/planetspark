import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        
        <div className="wrapper">
                <div style={{marginRight: "40px"}}>
                <Link to="/planetspark/usertouser" className="btn btn-primary" style={{padding:"7px 30px"}}>
                  User-to-User
                </Link>
                </div> 
                 <div>
                 <Link to="/planetspark/usertocomp" className="btn btn-primary" style={{paddingBlock:"7px"}}>
                  User-to-Computer
                </Link>
                 </div>
       </div>
    )
}

export default Home
