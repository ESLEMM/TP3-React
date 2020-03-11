import React from 'react'
import './Publication.css'
import profilepic from '../../assets/p1.jpg'
import pubpic from '../../assets/p1.jpg'

function Publication (props){
    
  
    return (
        
<div className="publication">
    <div className="nom">
    <img className='profilepic' src={props.profileimg}/> 
    <p>{props.name} </p>
    </div>
    <p>{props.time} </p>
    {props.children}
    <img className='pubpic' src={props.pubimg}/>
  
    
   
</div>
    )
}
  
  export default Publication