import React from 'react'
import 'font-awesome/css/font-awesome.min.css'
import './Search.css'

function Search (props){
    
  
    return (
<div className="topnav">
  
  <div className="search-container">
    
    <button type="submit"><i className="fa fa-search"></i></button>
      <input type="text" placeholder="Search.." name="search"/>
      <button type="submit"><i class="fa fa-cog"></i></button>
      <button type="submit"><i class="fa fa-edit"></i></button>
  </div>
</div>
    )
}
  
  export default Search