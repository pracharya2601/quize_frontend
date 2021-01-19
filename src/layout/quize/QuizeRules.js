
import Datacontext from 'context/data/data';

const QuizeRules = props => {
    //const {state, dispatch, playQuize, getSingleQuestion} = useContext(Datacontext);

    // const handlePlayQuize = () => {

    // }
    return(
        <div>
            <h1>QuizeRules</h1>
            <button onClick={props.handlePlayQuize}>play quize</button>

        </div>
        
    )
}

export default QuizeRules;