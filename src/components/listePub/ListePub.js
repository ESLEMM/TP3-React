import React from 'react';

import pubpic from '../../assets/p1.jpg'

import Publication from '../publication/Publication.js';






function ListePub() {
    return (
        
            
        
        
        <div className="listepub">
        <Publication  name="Emna Amri" profileimg={pubpic} pubimg={pubpic}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
       quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
         cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Publication>
        <Publication  name="Islem Khemiri" profileimg={pubpic} pubimg={pubpic}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
       quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
         cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Publication>

        </div>
               
        

 
    );
  }
  export default ListePub;