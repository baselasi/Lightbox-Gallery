import React from "react";
import data from "./data";
import "./style.css"
import Modal from "./modal";
export default function Grid(){
    const [images,setImges] = React.useState([data])
    const [state, setState] = React.useState(false)
    function handelClcik(){
        setState(true)
        console.log(state)
    }
    console.log(data)
   
    return(
        <div className="main">
            {data.map((el)=><div style={{backgroundImage:`url(${el})`}} onClick={handelClcik}>fasf</div>)}
            <Modal/>
        </div>
    )
}