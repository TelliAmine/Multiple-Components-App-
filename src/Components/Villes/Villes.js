import React from 'react';

import './Villes.css'

const Villes=()=>{

return(
    
     
<div className='Location-container'>
   <div className="location-text-container">
     
      <h2>Où se déroulent les sessions de formations ? </h2>
      <p className="location-text-descripttion">
      Les sessions se passent dans les hackerspaces de GoMyCode dans les villes
       suivantes : </p>
        <div className='img-container'>
       <div>
           <img src='http://www.ordre-medecins.org.tn/images/situation.jpg'/>
           <div className="location-name">TUNIS</div>
           <div className="location-adress">Immeuble NEO, 2 ème étage, Rue du Lac Lochness, <br/> Les Berges du Lac I, Tunis</div>

       </div>
       <div>
           <img src='https://www.alibabuy.com/photos/library/1500/14216.jpg'/>
           <div className="location-name">SOUSSE</div>
           <div className="location-adress">Immeuble TOUR EIFFEL, RDC, Rue des Orangers, <br/> Khezama, Sousse </div>

       </div>
       <div>
           <img src='https://savoirs.rfi.fr/sites/default/files/styles/rfi_desktop_page-media_conteneur/public/medias/images/vignettes/sfax-gettyimages-105670416_1920_web.jpg?itok=1k6WYGYh&timestamp=1505728079'/>
           <div className="location-name">SFAX</div>
           <div className="location-adress">Immeuble AMETISTA, 3 eme étage, <br/> Avenue 14 Janvier, En face de la Banque Centrale, Sfax</div>
       </div>
       </div>


      
  </div>
  
 
</div>
 
    
)

}


export default Villes;