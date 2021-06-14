import styled from "styled-components";
import {createGlobalStyle} from 'styled-components';
import {createMuiTheme} from '@material-ui/core/styles';

export default createGlobalStyle`

    *{ 
        padding: 0;
        margin: 0;
        list-style: none;
        box-sizing: border-box;
    }

    html {
        max-width: 100vw;
        min-height: 100vh;
    }
    body, #root {
        margin: 0;
        width: 100%;
        height: 100%;
        -webkit-font-smoothing: antialiased !important;
    }

`

export const theme = createMuiTheme({
    palette: {
      primary: {
        light: '#ffffff',
        main: '#ffffff',
        dark: '#cccccc',
      },
      secondary: {
        light: '#858585',
        main: '#6a6a6a',
        dark: '#555555',
      },
    },
  });