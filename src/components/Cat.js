import React from 'react';
import catImage from '../assets/cat1.png';

function Cat(props) {
    return(
        <img src={catImage} alt="cat" style={{ position: 'absolute', height: 'auto', width: '50px',  left: props.mouse.x, top: props.mouse.y }}/>
    )
}

export default Cat;