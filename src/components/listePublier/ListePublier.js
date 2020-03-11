import React from 'react';
import Publier from '../publier/Publier.js'
import './ListePublier.css'
import pen from '../../assets/pen.png'
import camera from '../../assets/camera.png'
import cinema from '../../assets/cinema.jpg'
import plus from '../../assets/dot.png'
import img from '../../assets/img.png'
import pop from '../../assets/popcorn.png'
import user from '../../assets/user.png'
import img2 from '../../assets/p1.jpg'


function ListePublier() {
    return (
<div className="listePublier">
   <div className="pub1" >
    
        <Publier message="message" publierimg={pen}/> 
       <Publier message="photo/video" publierimg={camera} />
       <Publier message="video en direct" publierimg={cinema}/>
       <Publier message="plus" publierimg={plus}/>
    </div>
    <hr/>

    <div className="partie2">
           <img src={img2} />  
          <p>Exprimez-vous</p> 
    </div> 
    <hr/>
<div className="pub1">
        <Publier message="photo/video"publierimg={img} /> 
       <Publier message="séance vidéo"publierimg={pop} />
        <Publier message="identifier des ..." publierimg={user}/>  
        <Publier message="plus" publierimg={plus}/>
    
</div>
</div>
    );
  }
  export default ListePublier;