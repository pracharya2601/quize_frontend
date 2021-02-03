import styled from "styled-components";
import px2vw from 'utils/other/px2vw';

let shadow = {
  sh1: 'rgba(50, 50, 93, 0.25) 0px 2px 5px 0px, rgba(0, 0, 0, 0.3) 0px 1px 3px 0px',
}

export const Box = styled.div`
box-sizing: border-box;
    display: flex;
    width: ${px2vw(300, 320)};
    flex-direction: column;
    padding: ${px2vw(20)} 20px ${px2vw(20)} 20px;
    margin: ${px2vw(20)};
    background-color: ${props => props.bgColor};
    height: 100%;
    margin: ${props => props.margin};
    border-radius: 5px;
    box-shadow: ${(props) => props.theme[props.shadow]};
    @media (min-width: 528px) {
        width: ${px2vw(350, 528)};
        height: 100%;
    }
    @media (min-width: 768px) {
        width: ${px2vw(420, 768)};
        height: 100%;
    }

    @media (min-width: 1024px) {
        width: ${px2vw(500)};
        height: 100%;
    }
`;
export const BoxTitle = styled.h3`
  font-size: 1.6rem;
  text-align: center;
  color: ${({theme}) => theme.text}

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const BoxText = styled.p`
  margin-top:auto;
  margin-bottom: auto;
  padding: ${px2vw(5)};
  color: ${({theme}) => theme.text}
  font-size: 2.2rem;
  @media (min-width: 1024px) {
    font-size: 1.3rem;
  }
`;