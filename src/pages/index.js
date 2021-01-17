import React from 'react';
import {Link} from "react-router-dom";
const Home = (props) => {
    return(
        <div>
            <h1>Home page</h1>
            <Link to={`/auth/signin`}>Get Started</Link>
        </div>
    )
}

export default Home;