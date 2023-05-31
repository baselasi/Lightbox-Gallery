import React from "react";
export default function Gallery(props){
    return(
        <div className="gallery" style={{display: props.state ? "flex" : "none"}}>
            {props.gallery.map((img)=>
            <div 
            style={{background:`url(${img})`}} 
            onClick={()=>props.changeImage(img)}
            className="img">
            </div>)}
        </div>
    )
}