import {useState, useEffect, useReducer} from 'react';
import {useHistory } from "react-router-dom";

import Datacontext from 'context/data/data';

import { Box, BoxText, BoxTitle } from 'components/box';
import Button from 'components/button';

const TicketContainer = props => {
    return (
        <Box>
            Ticket cotainer list of all Purchased which wasnt draw
        </Box>
    )
}

export default TicketContainer;