import React from 'react'
import './Contacts.css'
import BubleMsg from '../buble-message/BubleMsg'
import Search from '../searchbar/Search.js'
function Contacts (props){
    
  
      return (
          
      <div className='contacts'>
      <BubleMsg name='Emna Amri'/>  
      <BubleMsg name='Islem Khemiri'/> 
      <BubleMsg name='Maryem Soyah'/> 
      <BubleMsg name='Ferdaous Banney'/> 
      <BubleMsg name='Maryem Drissi'/> 
      <div className='search'>
      <Search />
      </div>
      </div>
      )
  }
  
  export default Contacts