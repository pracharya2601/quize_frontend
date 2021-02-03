import styled from 'styled-components';


export const StyledNavbar = styled.header`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    box-shadow: 0 4px 6px -6px ${({theme}) => theme.text};
`

export const IconsContainer = styled.nav`
    display: flex;
    align-items: center;
    > * {
        margin-left: 15px;
    }
`
export const MenuContainer = styled.div`
    position: absolute;
    right: 10px;
    margin-top: 80px;
    height: 400px;
    width: 250px;
    border-radius: 20px;
    background: ${({theme}) => theme.menu};
    padding: 10px;
    z-index: 100;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`