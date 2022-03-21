import { BiRightArrow } from "react-icons/bi"
import './style.css';
import setinha from "../../../Assets/setinha.png";
import { useState } from "react/cjs/react.development";

export default function Question({number, quest, res}){
   const [questStatus, setStatus] = useState("close");
    return( 
        <>
            {questStatus === "close" && 
                <div className={"question"} onClick={()=> setStatus("open")}>
                    <h2>Pergunta {number}</h2>
                    <BiRightArrow />
                </div>
            }
            {questStatus === "open" &&
                <div className={"question questionOpen"} onClick={()=>setStatus("res")}>
                    <h2>{quest}</h2>
                    <img src={setinha} alt="skip" /> 
                </div>
            }
            {questStatus === "res" &&
                <div className={"question questionOpen res"}>
                    <h2>{res}</h2>
                    <div className="optionsContainer">
                        <div className="errorOption"><span>Não</span><span>lembrei</span></div>
                        <div className="almostErrorOption"><span>Quase não</span> <span>lembrei</span></div>
                        <div className="rightOption"><span>Zap!</span></div>
                    </div>
                </div>
            }
        </>
    )
}

