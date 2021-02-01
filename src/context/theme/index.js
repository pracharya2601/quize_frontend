import {useState, useEffect} from 'react';
import {ThemeProvider} from 'styled-components';
import GlobalStyles from './GlobalStyles';
import {themeItem} from './Theme';

import Themecontext from './themecontext';


const Theme = ({children}) => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme');
        if(!localTheme) {
          const darkOs = window.matchMedia("prefers-color-schema").matches ? "light" : "dark";
          setTheme(darkOs);
          window.localStorage.setItem('theme', darkOs);
        } else {
         setTheme(localTheme);
        }
      }, []);

    const preferedTheme = themeItem[theme];
    
    const changeTheme = (selected) => {
        const newSelected = themeItem[selected] ? selected : 'light';
        setTheme(newSelected);
        window.localStorage.setItem('theme', newSelected);
    }

    return (
        <Themecontext.Provider
            value={{
                theme: theme,
                themeAsset: preferedTheme,
                changeTheme: changeTheme,
            }}
        >
            <ThemeProvider
                theme={themeItem[theme]}
            >
                <GlobalStyles />
                {children}
            </ThemeProvider>
        </Themecontext.Provider>
    )
}

export default Theme;