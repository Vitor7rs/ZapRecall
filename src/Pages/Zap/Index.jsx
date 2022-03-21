import Slogo from "../../Components/Slogo";
import './style.css';
import Question from "./Question/Index";
import ZapCount from "./ZapCount/Index";
import { useState } from "react";
import { questions } from "../../Data/Data";

export default function Zap(){
    const [count, setCount] = useState(0);

    return(
        <>
            <header className="top">  
                <Slogo/>
            </header>

            <main className="questionsContainer">
                {
                    questions.map((quest, index) => 
                        <Question key={index} number={index+1} quest={quest.quest} res={quest.res} setCount={setCount} count={count} />
                    )
                }
            </main>

            <ZapCount totalQuests={questions.length} playQuest={count}/>
        </>



    )
}