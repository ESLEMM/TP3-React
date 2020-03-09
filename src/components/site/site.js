import React from 'react';
import Menu from '../menu/menu.js'
import Raccourcis from '../raccourcis/raccourcis.js'
import img1 from './cover.PNG'
import img2 from './im2.png'

import './site.css'

import { Row, Col } from 'antd';


function Site() {
    return (
        <body style={{position: "fixed"}} >
        <div >
        <h2 >ING2 -INLOG -INREV</h2>
        <Menu/>     
        <p className="titre"> Raccourcis</p>
         <Raccourcis img={img2} titre="nom page"/>
         <Raccourcis img={img2} titre="nom groupe "/>
         <Raccourcis img={img2} titre="2 ING "/>
         <Raccourcis img={img2} titre="Groupe ludo "/>
         <Raccourcis img={img2} titre="2 ING "/>
         <Raccourcis img={img2} titre="2 ING "/>       
        </div>        
        </body>

 
    );
  }
  export default Site;