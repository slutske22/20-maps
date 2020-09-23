import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

   html {
      box-sizing: border-box;
      overflow-x: hidden;
   }
   *, *:before, *:after {
      box-sizing: inherit;
   }

   html, body, #root, .App {
      width: 100%;
      height: 100%;
      padding: 0;
      margin: 0;
   }

   body {
      font-family: 'Merriweather', serif;
      font-size: 14px;
      line-height: 1.42857143;
      color: #333;
   }

   h1, h2 {
      font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
   }

   a {
      color: white;
   }
   a:hover {
      color: lightblue;
   }

   .top-link-button {
      margin: 0;
      padding: 0;
   }

   .arcgis-map {
      width: 100%;
      height: 100%;
   }

`;

export default GlobalStyles;
