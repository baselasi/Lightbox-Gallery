import React from "react";



export default function Modal(url,active,gallery){
    //{url.gallery.map((img)=><div style={{backgroundImage:`${img}`}}></div>)}
    console.log(url.gallery)
    return(
        
            <div style={{
                backgroundImage:`url(${url.url})`,
                display: url.active ? "none" : "flex"
                }} className="modal">
            </div>
            
        
            
        
        
    )
}