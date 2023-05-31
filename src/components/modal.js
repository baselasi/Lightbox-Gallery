import React from "react";



export default function Modal(props){
    return(
            <div style={{
                backgroundImage:`url(${props.url})`,
                display:props.active ? "flex" : "none"
                }} className="modal">
            </div>
    )
}