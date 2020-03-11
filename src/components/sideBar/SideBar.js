import React from 'react';
import Menu from '../menu/menu.js'
import ListeRa from '../listeRa/ListeRa.js';
import './SideBar.css'






function SideBar() {
    return (
        
            
        <div className="sideBar" >
        <h2 >ING2 -INLOG -INREV</h2>
        <Menu/> 
        <p className="ra"> Raccourcis</p>   
        <ListeRa className="lisra"/>       
        </div>
    )
}
export default SideBar