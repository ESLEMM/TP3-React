import React from 'react';
import './menu.css';


function Menu() {
  return (
    <div className="menu">
        <a href="#">A propos</a>
        <a href="#" className="active">Discussion</a>
        <a href="#">Membres</a>
        <a href="#">événement</a>
        <a href="#">Photos</a>
        <a href="#">Fichiers</a>
        <a href="#">Séance video</a>
     <br></br>
    <input type="text" placeholder="chercher dans un groupe"></input>
    <br></br>
     </div>
  );
}

export default Menu;