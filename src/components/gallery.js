import React from "react";


export default function Gallery(props){
    //{gallery.map((img)=><div style={{background:`url(${img})`}}></div>)}
    console.log(props.state)
    console.log(props)
    return(
        <div className="gallery" style={{display: props.state ? "none" : "flex"}}>
            {props.gallery.map((img)=>
            <div 
            style={{background:`url(${img})`}} 
            onClick={()=>props.changeImage(img)}
            className="img">
            </div>)}
        </div>
    )
}