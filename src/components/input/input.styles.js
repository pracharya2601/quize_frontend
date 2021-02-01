import styled from 'styled-components';
import px2vw from 'utils/other/px2vw';

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 10px;
`

export const StyledInput = styled.input`
  padding: ${px2vw(10)};
  margin: ${px2vw(5)};
  font-size: 1.5rem;
  color: ${({theme}) => theme.textblack};
  border: 2px solid ${({theme}) => theme.text};
  border-radius: 5px;
`;

export const StyledLabel = styled.label`
    padding-top: ${px2vw(10)};
    margin: ${px2vw(5)};
    font-size: 1.5rem;
    color: ${props => props.theme.text};
`

export const StyledError = styled.label`
    margin: ${px2vw(5)};
    font-size: 1rem;
    color: ${props => props.theme.danger};
`