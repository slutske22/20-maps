const themes = {
   light: 'https://js.arcgis.com/4.16/esri/css/main.css',
   dark: 'https://js.arcgis.com/4.16/esri/themes/dark/main.css',
};

export const loadArcGISCSS = (theme) => {
   const prevCss = document.getElementById('arcgis-css');
   if (prevCss) {
      prevCss.parentNode.removeChild(prevCss);
   }
   const element = document.createElement('link');
   element.id = 'arcgis-css';
   element.setAttribute('rel', 'stylesheet');
   element.setAttribute('type', 'text/css');
   element.setAttribute('href', themes[theme]);
   document.head.appendChild(element);
};

export default loadArcGISCSS;
