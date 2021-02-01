import { createGlobalStyle} from "styled-components"
import px2vw from 'utils/other/px2vw';

const GlobalStyles = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    body {
        background: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
        border-color: ${({theme}) => theme.borderColor};
        font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
        transition: all 0.50s linear;
    }
    a {
        color: ${({ theme }) => theme.link};
        font-size: 16px;
    }
  `
export default GlobalStyles;