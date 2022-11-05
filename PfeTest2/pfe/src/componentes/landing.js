import React from 'react';
import image from './img/image.jpg'

function Landing(){
    return(
        <>
         <img src={image} alt="Imagen" style = {{width: "100%",  height: "auto"}} />
        </>
    );
}

export default Landing
