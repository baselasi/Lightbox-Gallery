import React from "react";
import data from "./data";
import "./style.css"
import Modal from "./modal";
import Gallery from "./gallery";
export default function Grid(){
    const [state, setState] = React.useState(false)             //state to identify whether a image in being shown in the modal or not
    const [activeImage, setActiveImage] = React.useState("")     //state to identify the image in the modal  
    function handelClcik(url){                  //choose the image to be shown by clicking it from the grid     
        setActiveImage(url)
        setState((prevState)=>!prevState)
    }
    function changeImage(ul){           //choose the image to be shown by cliking it from the gallery below
        setActiveImage(ul)
    }
    function changState(){      //hide the image after cliking outside the modal
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