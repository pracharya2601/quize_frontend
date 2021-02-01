import {createContext} from 'react';
import { themeItem } from './Theme';
const Themecontext = createContext({
    theme: 'light',
    themeAsset: themeItem['light'],
});

export default Themecontext;