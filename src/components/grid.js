import React from "react";
import data from "./data";
import "./style.css"
import Modal from "./modal";
import Gallery from "./gallery";
export default function Grid(){
    const [images,setImges] = React.useState([data])
    const [state, setState] = React.useState(false)
    const [activeImage, setActiveImage] = React.useState("")
    function handelClcik(url){
        setActiveImage(url)
        setState((prevState)=>!prevState)
    }
    function changeImage(ul){
        setActiveImage(ul)
    }
    function changState(){
       if(state){
        setState(false)
       }
    }
    return(
        <>
            <div className="body" onClick={changState}>
                <div className="main" >
                    {data.map((el)=>
                        <div   
                            style={{backgroundImage:`url(${el})`}}
                            onClick={()=>handelClcik(el)}  
                            className="image">
                        </div>
                    )}
                </div>
            </div>
            <div>
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
        </>
    )
}