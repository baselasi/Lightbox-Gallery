import React from "react";


export default function Gallery(gallery){
    console.log(gallery.Gallery)
    const x=gallery.Gallery
    //{gallery.map((img)=><div style={{background:`url(${img})`}}></div>)}
    return(
        <div className="gallery">
            {x.map((img)=><div style={{background:`url(${img})`}} className="img"></div>)}
        </div>
    )
}