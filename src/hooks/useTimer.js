import {useState, useEffect} from 'react';

const useTimer = () => {
    const [timeLeft, setTimeLeft] = useState(60);
    const [run, setRun] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() =>{
            if(timeLeft !== 0) {
                if(run) {
                    setTimeLeft(timeLeft - 1)
                } else {
                    setTimeLeft(timeLeft)
                }
                
            }
        }, 1000);
        return () => {
            clearTimeout(timer)
        }
    }, [timeLeft])


    return {timeLeft, setTimeLeft, setRun};
}

export default useTimer;