import React from 'react'
import './BubleMsg.css'
import profilepic from '../../assets/p1.jpg'
import activepic from '../../assets/p2.jpg'
function BubleMsg (props){
    
  
      return (
      <div className='bubleMsg'>
        <img className='profilepic' src={profilepic}/> 
        <p>{props.name} </p>
        <img className='activepic' src={activepic}/>
      </div>
      )
  }
  
  export default BubleMsg