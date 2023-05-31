import React from "react";
import data from "./data";
import "./style.css"
import Modal from "./modal";
import Gallery from "./gallery";
export default function Grid(){
    const [images,setImges] = React.useState([data])
    const [state, setState] = React.useState(true)
    const [activeImage, setActiveImage] = React.useState("")
    function handelClcik(url){
        setActiveImage(url)
        setState((prevState)=>!prevState)
        console.log(state)
    }
    function changeImage(ul){
        setActiveImage(ul)
    }
    return(
        <div className="main">
            {data.map((el)=>
                <div   
                    style={{backgroundImage:`url(${el})`}}
                    onClick={()=>handelClcik(el)}  
                    className="image">
                </div>
            )}
            <Modal
            url={activeImage}
            active={state}
            />
            <Gallery
            gallery={data}
            changeImage={changeImage}
            state={state}
            />
        </div>
    )
}