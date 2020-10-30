import { createGlobalStyle } from 'styled-components';
import ClipboardIcon from '../assets/icons/clipboard.svg';

const GlobalStyles = createGlobalStyle`

   /* ---------- General Page Styles ---------- */

   html {
      box-sizing: border-box;
      overflow-x: hidden;
   }
   *, *:before, *:after {
      box-sizing: inherit;
   }

   html, body, #root {
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
      cursor: pointer;
      color: inherit;
   }
   a:hover {
      color: inherit;
   }

   em.action {
      font-style: normal;
      color: white;
   }

   .top-link-button {
      margin: 0;
      padding: 0;
   }

   .visibility-tracker {
      width: 100%;
      height: 100%;
   }

   .tooltip {
      pointer-events: auto !important;
      opacity: 1 !important;
      &:hover {
         visibility: visible !important;
         opacity: 1 !important;
      }
   }


   /* ------- ArcGIS Map Modifiers -------- */

   .arcgis-map {
      width: 100%;
      height: 100%;
   }

   .arcgis-map-dark {
      .esri-zoom.esri-widget, .esri-expand.esri-widget, .esri-time-slider {
         border: 1px solid rgba(173,173,173,0.3)
      }
   }

   .esri-swipe__container:focus {
      outline: 1px solid grey;
   }

   .clipboard-icon::before {

      width: 20px;
      height: 20px;
      margin-top: 2px;
      display: inline-block;
      content: '';
      -webkit-mask: url(${ClipboardIcon}) no-repeat 50% 50%;
      mask: url(${ClipboardIcon}) no-repeat 50% 50%;
      -webkit-mask-size: cover;
      mask-size: cover;

      .arcgis-map-light & {
         background-color: #6e6e6e;
      }
      .arcgis-map-dark & {
         background-color: #adadad;
      }
      .arcgis-map-dark-blue & {
         background-color: #69dcff;
      }

   }

   .esri-ui-bottom-right {
      flex-flow: column !important;
   }

   .esri-ui-bottom-right {
      .esri-expand:not(:only-child) {
         margin-bottom: 10px;
      }
   }


`;

export default GlobalStyles;
