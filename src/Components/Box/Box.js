import React from 'react';


import './Box.css'

const Box=()=>{

return(
   
    <div className="container">
     
     <div className="row ">
    
        <div className="single-program col-md-3 col-sm-6 col-xs-12 box-gris pdg30" >
        <div className='underbox'>
          

                 <h2 className="label "> FULL TIME PROGRAM</h2>
                 <div className='devider'>______</div>
                
                <p >un programme intensif de 3 mois pour devenir développeur
                 fullstack js ou java. 
                Un coaching technique et professionnel régulier et des
                 liens très forts avec le monde de l'entreprise.

                 </p>  
                    
        
                     
                     
                     
           
             
                <a  className=" but myButton1 "href="#" > En Savoir Plus</a>
                
                </div>

             
       </div>
       
       
        <div className="single-program col-md-3 col-sm-6 col-xs-12 box-red pdg30" >
        <div className='underbox'>
        <h2 className="label x"> FULL TIME PROGRAM</h2>
        <div className='devider'>______</div>
                <p >
                Tu peux développer ton produit technologique pendant l'année
                 scolaire si tu es étudiant ou en parallèle de ton travail si
                  tu es un professionnel. Ça se passe tous les weekends (demi-journée Samedi ou dimanche) 
                  dans notre Hackerspace !  
                </p>
             
                
                     
                <a  className="but  myButton2 "href="#" > En Savoir Plus</a>
                
               
                </div>
        </div>
     
           
        <div className="single-program col-md-3 col-sm-6 col-xs-12 box-blue pdg30" >
        <div className='underbox'>
        <h2 className="label x"> FULL TIME PROGRAM</h2>
        <div className='devider'>______</div>
                <p>
              Ce programme vise à initier les plus jeunes (8-12ans) à l'informatiqueet à la programmation sur 4 niveaux
              un niveau dure 2mois.A la fin du programme,l'enfant doit présenter son projet ao pdg30d'une entreprise technologique .
                            
                </p>
                
                <a  className=" but myButton3 "href="#" > En Savoir Plus</a>
                
       </div>
        
    </div>
    
    
    <div className="single-program col-md-3 col-sm-6 col-xs-12 box-Darkblue pdg30" >
    <div className='underbox'>
    <h2 className="label x "> FULL TIME PROGRAM</h2>
    <div className='devider'>______</div>
                <p>
                Développe ton produit technologique pendant 3 semaines pendant l'été. Un expérience très riche d'apprentissage et de rencontres avec des passionnés de la technologie.
                </p>
                
                <a  className=" but myButton4 "href="#" > En Savoir Plus</a>
                
       
        </div>
    </div>
    </div>
    </div>
   
)

}


export default Box;
