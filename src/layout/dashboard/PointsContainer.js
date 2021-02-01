import React, {useEffect,useContext} from 'react';
import {useHistory } from "react-router-dom";
import Datacontext from 'context/data/data';
import { Box, BoxText, BoxTitle } from 'components/box';
import Button from 'components/button';

const PointsContainer = (props) => {
    const {state, getPoints} = useContext(Datacontext);
    const history = useHistory();
    useEffect(() => {
        let mounted = true;
        getPoints();
        return function cleanup() {
            mounted = false
        }
        
    }, []);
    const {points} = state;
    return (
            <Box>
            <BoxTitle>Points {points.availablePoints}</BoxTitle>
                <BoxText>Total earned: {points.earnedPoints}</BoxText> 
                <Button
                    onClick={() => history.push('/points/history/earned')}
                >See all</Button>
                <BoxText>Total Purchased: {points.purchasedPoints}</BoxText> 
                <Button
                    onClick={() => history.push('/points/history/purchased')}
                >See all</Button>
                <BoxText>Used: {points.usedPoints}</BoxText> 
                <Button>See all</Button>
            </Box>
    )
}

export default PointsContainer;