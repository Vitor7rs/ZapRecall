import { BiRightArrow } from "react-icons/bi"
import './style.css';
import setinha from "../../../Assets/setinha.png";
import { useState } from "react/cjs/react.development";

export default function Question({number, quest}){
   const [questStatus, setStatus] = useState("close");
   console.log(questStatus)
    return( 
        <>
            {questStatus==="close" && 
                <div className={"question"} onClick={()=> setStatus('open')}>
                    <h2>Pergunta {number}</h2>
                    <BiRightArrow />
                </div>
            }
            {questStatus === "open" &&
                <div className={"question questionOpen"}>
                    <h2>{quest}</h2>
                    <img src={setinha} alt="skip" /> 
                </div>
            }
           
        </>
    )
}

