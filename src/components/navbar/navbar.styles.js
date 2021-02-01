import styled from 'styled-components';


export const StyledNavbar = styled.header`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
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
`