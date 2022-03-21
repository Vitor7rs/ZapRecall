import { BiRightArrow, BiXCircle, BiCheckCircle, BiHelpCircle } from "react-icons/bi"
import './style.css';
import setinha from "../../../Assets/setinha.png";
import { useState } from "react";

export default function Question({number, quest, res, setCount, count}){
   const [questStatus, setStatus] = useState("close");
   const [resultQuest, setResult] = useState("");
   

   function processQuest(res){
        setStatus("answered");
        setResult(res);
        setCount(count+=1);
   }

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
                        <div className="errorOption" onClick={() => processQuest("error") }><span>Não</span><span>lembrei</span></div>
                        <div className="almostErrorOption" onClick={() => processQuest("almostError")}><span>Quase não</span> <span>lembrei</span></div>
                        <div className="rightOption" onClick={() => processQuest("right")}><span>Zap!</span></div>
                    </div>
                </div>
            }
            {questStatus === "answered"  &&
                <div className={`question answered ${resultQuest}`}>
                    <h2>Pergunta {number}</h2>
                    {resultQuest === "error" && <BiXCircle/>}
                    {resultQuest === "almostError" && <BiHelpCircle />}
                    {resultQuest === "right" && <BiCheckCircle />}
                </div>
            }
        </>
    )
}

