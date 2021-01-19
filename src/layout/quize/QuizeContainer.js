import React, {useState, useContext, useEffect} from 'react';
import Datacontext from 'context/data/data';
import useTimer from 'hooks/useTimer';

const QuizeContainer = (props) => {
    const [selected, setSelected] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const {
        state, 
        submitAnswer, 
        clearMessage,
        clearError,
    } = useContext(Datacontext);
    const {timeLeft, setTimeLeft, setRun} = useTimer();

    const handleClick = () => {
        props.handlePlayQuize()
        setTimeLeft(60);
        setSelected('');
        setRun(true);
        setSubmitted(false);
        clearMessage();
        clearError();
    }
    const handleSubmit = () => {
        submitAnswer(selected)
        setRun(false);
        setSubmitted(true);
        console.log('submitted');
    }
    return(
        <div>
            <h3 style={{color: 'yellowgreen'}}>{state.submitMessage}</h3>
            <h3>Time Remaining {timeLeft}</h3>
            <h2>
                <strong>Question: </strong>
                {state.quize}
            </h2>
            <div>
                <ul>
                {state.options.length > 0 && state.options.map((option, index) => (
                        <li 
                            key={index} 
                            onClick={() => {!submitted ? setSelected(option.value) : alert("You already submitted the answer")}}
                        style={{border: option.value == selected ? "1px solid black": '' }}
                        >
                            <h4>{option.name}</h4>
                        </li>
                    ))}
                </ul>
            </div>
            <button onClick={handleSubmit} disabled={submitted}>Submit Answer</button>
            <button onClick={handleClick}>Next</button>
        </div>
        
    )
}

export default QuizeContainer;