import React from 'react'

function Translate() {
    const google = window.google;
    const src=
    "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    const loadGoogleTranslate =()=>{ 
        new google.translate.TranslateElement(
            {pageLanguage: 'en'}, 
            'google_translate_element'
        ); 
    } 
  return (
   <div id="google_translate_element">
       google element
   </div>
  )
}

export default Translate