import Slogo from "../../Components/Slogo";
import './style.css';
import Question from "./Question/Index";
import ZapCount from "./ZapCount/Index";
//import { useState } from "react/cjs/react.production.min";
import { questions } from "../../Data/Data";

export default function Zap(){


    return(
        <>
            <header className="top">  
                <Slogo/>
            </header>

            <main className="questionsContainer">
                {
                    questions.map((quest, index) => 
                        <Question key={index} number={index+1} quest={quest.quest} res={quest.res}/>
                    )
                }
            </main>

            <ZapCount/>
        </>



    )
}