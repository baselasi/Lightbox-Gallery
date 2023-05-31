import React from "react";



export default function Modal(url){
    return(
        <div style={{backgroundImage:`url(${url.url})`}} className="modal"></div>
    )
}