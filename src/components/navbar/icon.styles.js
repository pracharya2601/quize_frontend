import styled from 'styled-components';


export const Icon = styled.div`
    width: 30px;
    height: 30px;

    background-image: url(${props => props.src});
    background-position: center;
    background-size: cover;
`
export const IconContainer = styled.div`
    width: 40px;
    height: 40px;
    display: flex;
    margin: auto;
    padding: 5px;
    border-radius: 100%;
    background: ${({theme}) => theme.white};
    border: 1px solid ${({theme}) => theme.text};
    cursor: pointer;
    position: relative;
`

export const IconVal = styled.div`
    position: absolute;
    top: 0;
    right: -10px;
    height: 25px;
    width: 25px;
    font-size: 0.9rem;
    padding: 3px;
    border-radius: 100%;
    border: 1px solid ${({theme}) => theme.body};
    background: ${({theme}) => theme.text};
    color: ${({theme}) => theme.body}
`

export const MenuDotContainer = styled.div`
    height: 50px;
    width: 50px;
    background: transparent;
    cursor: pointer;
    border-radius: 5px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    padding: 3px;
    &:hover {
        opacity: 0.8;
    }
`

export const MenuDot = styled.div`
    height: 10px;
    width: 10px;
    border-radius: 2px;
    background: ${({theme}) => theme.primary};
    margin: 1px;

`
