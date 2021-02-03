import { Box } from "components/box";
import styled from "styled-components";

export const StyledCol  = styled(Box)`
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    border-shadow: none;
    padding: 0 0 0 10px;
    margin: 15px 0;
    border: 1px solid ${({theme}) => theme.primary}
`