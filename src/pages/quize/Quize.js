import React, {useState, useContext, useEffect} from 'react';
import {useHistory } from "react-router-dom";
import Datacontext from 'context/data/data';

import QuizeContainer from 'layout/quize/QuizeContainer';
import QuizeRules from 'layout/quize/QuizeRules';

const Quize = (props) => {
    const[play, setPlay] = useState(false);

    const {playQuize, getSingleQuestion} = useContext(Datacontext);

    const  history = useHistory();
    useEffect(() => {
        let mounted = true;
        playQuize();
        return function cleanup() {
            mounted = false
        }
        
    }, []);

    const handlePlayQuize = () => {
        getSingleQuestion();
        setPlay(true);
    }
    return (
        <div>
            <button onClick={() => history.push('/dashboard')}>Go back</button>
            {play && (
                <QuizeContainer 
                    handlePlayQuize={handlePlayQuize}
                />
            )}
            {!play &&( 
                <QuizeRules 
                    handlePlayQuize={handlePlayQuize}
                />
            )}
        </div>
    )
}

export default Quize;