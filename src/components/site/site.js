import React from 'react';
import cover from '../../assets/cover.PNG'
import pubpic from '../../assets/p1.jpg'
import Publication from '../publication/Publication.js';
import './site.css'
import Contacts from '../contacts/Contacts.js';
import SideBar from '../sideBar/SideBar.js';
import ListePub from '../listePub/ListePub';
import Publier from '../publier/Publier';
import ListePublier from '../listePublier/ListePublier';

function Site() {
    return (
        <body  >
        <div className="SideB"><SideBar/></div>     
        <section>
        <img src={cover}className="cover"  />
        <div className="pub">
        <ListePublier/>
        <ListePub/>
        </div>
        </section>
        <div className="contactsite">        
            <Contacts />
        </div>        
        </body>

 
    );
  }
  export default Site;