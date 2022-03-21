import Slogo from "../../Components/Slogo";
import './style.css';
import Question from "./Question/Index";
import ZapCount from "./ZapCount/Index";

export default function Zap(){
    return(
        <>
            <header>  
                <Slogo/>
            </header>

            <main className="questionsContainer">
                <Question number={7}/>
                <Question number={7} />
                <Question number={7} />
                <Question number={7} />
            </main>

            <ZapCount/>
        </>



    )
}