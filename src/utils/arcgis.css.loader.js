const themes = {
   light: 'https://js.arcgis.com/4.16/esri/css/main.css',
   dark: 'https://js.arcgis.com/4.16/esri/themes/dark/main.css',
};

export const loadArcGISCSS = (theme) => {

   const addCssLink = () => {
      const element = document.createElement('link');
      element.id = 'arcgis-css';
      element.setAttribute('rel', 'stylesheet');
      element.setAttribute('data-theme', theme);
      element.setAttribute('type', 'text/css');
      element.setAttribute('href', themes[theme]);
      document.head.appendChild(element);
   }

   const prevCss = document.getElementById('arcgis-css');

   if (prevCss) {
      // check if current css link is same as desired theme
      if (prevCss.getAttribute('data-theme') !== theme){
         prevCss.parentNode.removeChild(prevCss);
         addCssLink
      }
   } else {
      // if no existing css link, add it (first time loading)
      addCssLink()
   }


};

export default loadArcGISCSS;
