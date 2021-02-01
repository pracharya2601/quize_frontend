import styled from "styled-components";
import px2vw from 'utils/other/px2vw';

const Flexbox = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
margin: ${px2vw(32)};
max-width: 100%;

@media (min-width: 1024px) {
  flex-wrap: nowrap;
}
`;

export default Flexbox;