import React, {useState, useEffect, useContext} from 'react';
import {Link, useParams, useHistory} from 'react-router-dom';
import Datacontext from 'context/data/data';
import axios from 'axios';

import Navbar from 'components/navbar';
import Container from 'components/container';
import { Box, BoxText, BoxTitle } from 'components/box';
import Button from 'components/button';
import Flexbox from 'components/flexbox';

import {getpoinsthistory,clearpointhistory, error} from 'context/data/actionCreaters';

const API = process.env.REACT_APP_API_ENDPOINT

const PointHistory = (props) => {
    const {historySlug} = useParams();
    const history = useHistory();

    const [param, setParam] = useState();
    const [pageNumber, setPageNumber] = useState(1)
    const {state, dispatch} = useContext(Datacontext);

    useEffect(() => {
        let mounted = true;
        let next = param === historySlug ? state.pointsHistory.next : '';
        if(param !== historySlug) {
            dispatch(clearpointhistory());
        }
        axios.get(`${API}/points/${historySlug}?after=${next}`, {withCredentials: true})
        .then(({data}) => {
            dispatch(getpoinsthistory(data));
            setParam(historySlug);
        })
        .catch((e) => {
            dispatch(error(e));
        })
        return function cleanup() {
            mounted = false
        }
    }, [pageNumber]);

    const handleNextPage = () => {
        setPageNumber(pageNumber+1);
    }
    const {pointsHistory} = state;

    if(!pointsHistory) {
        return <h1>Loading...</h1>
    }
    return(
        <Container>
            <Navbar />
            <Button onClick={() => history.push('/dashboard')}>{'<<'} Go to Dashboard</Button>
            <Flexbox>
                <BoxTitle>{historySlug == 'earned' ? 'Your history of earning points Playing quize' : "Your purchased history"}</BoxTitle>
            </Flexbox>
                {pointsHistory.lists.length > 0 ? pointsHistory.lists.map((item, index) => (
                    <Flexbox key={item.id}>
                        <Box shadow="sh1">
                            <BoxText>Points Earn: {item.point}</BoxText>
                            <BoxText>Status: {item.status === 'correct' ? "Correct Answer" : item.status}</BoxText>
                            <BoxText>Date:{item.date}</BoxText>
                        </Box>
                        <Box>
                            Ads goes here
                        </Box>
                    </Flexbox>
                )) : (
                    <h3>You dont have any history</h3>
                )}
            <Flexbox>
            <Button
                onClick={handleNextPage}
                disabled={state.pointsHistory.next ? false : true}
            >
                Load more
            </Button>
            </Flexbox>
        </Container>
    )
}

export default PointHistory;