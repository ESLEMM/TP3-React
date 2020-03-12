import React from 'react'
import './Publier.css';

function Publier (props){
    return ( 
    
 <div className="publier">
     <img src={props.publierimg}  />
    <p>{props.message}</p>
    <span className="vertical-line">  
    </span>  
</div>
      )
}
 
export default Publier;

