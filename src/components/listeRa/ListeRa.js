import React from 'react';
import Raccourcis from '../raccourcis/raccourcis.js'
import img2 from '../../assets/im2.png'





function ListeRa() {
    return (  
        <div className="listeRa" >    
        
         <Raccourcis img={img2} titre="nom page"/>
         <Raccourcis img={img2} titre="nom groupe "/>
         <Raccourcis img={img2} titre="2 ING "/>
         <Raccourcis img={img2} titre="Groupe ludo "/>
         <Raccourcis img={img2} titre="2 ING "/>       
        </div>
    )
}
export default ListeRa