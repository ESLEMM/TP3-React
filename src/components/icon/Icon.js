import React from 'react';
import './Icon.css'



function Icon(props) {
  return (
    <div className="icon">
        <img src={props.iconimg}  />
        <p>{props.icontitle}</p>
        {props.children}
    </div>
  );
}

export default Icon;
