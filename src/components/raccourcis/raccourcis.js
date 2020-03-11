import React from 'react'
import './raccourcis.css';

function Raccourcis (props){
    return ( 
 <div className="Racc">
     <a class="lien" href="#"> 
 <img src={props.img}  height="16" width = "16"/> 
 <span>{props.titre}</span> 
 </a>
 </div>
      )
}
 
export default Raccourcis;

  