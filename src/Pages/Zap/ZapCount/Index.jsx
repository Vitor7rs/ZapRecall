import { BiXCircle, BiHelpCircle, BiCheckCircle } from "react-icons/bi"
import party from "../../../Assets/party.png";
import sad from "../../../Assets/sad.png";
import './style.css';

export default function ZapCount({totalQuests, playQuest, count, final}){
    return(
        <footer className='counter'>
            {final==="happy" && 
                <div className="finalMessage">
                    <div className="resultTitle">
                        <img src={party} alt="" />
                        <h2>Parabéns!</h2>
                    </div>
                    <p>Você não esqueceu de nenhum flashcard!</p>
                </div>}
            {final==="sad" &&
                <div className="finalMessage">
                    <div className="resultTitle">
                        <img src={sad} alt="" />
                        <h2>Putz...</h2>
                    </div>
                    <p>Ainda faltam alguns... Mas não desanime!</p>
                </div>}      
            
            <h2>{playQuest}/{totalQuests} CONCLUÍDOS</h2>
            <div>
            
            {count.map((response, index)=>{
                if (response==="right") { return <BiCheckCircle className="rightIcon" key={index} />}
                else if (response === "almostError") { return <BiHelpCircle className="almostIcon" key={index} /> }
                else if (response === "error") { return <BiXCircle className="errorIcon" key={index} /> }
                else return false;
                })}
            </div>
        </footer>
    )
}