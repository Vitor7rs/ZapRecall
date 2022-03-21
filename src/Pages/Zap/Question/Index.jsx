import { BiRightArrow } from "react-icons/bi"
import './style.css';

export default function Question({number}){
    return(
        <div className={`question`}>
            <h2>Pergunta {number}</h2>
            <BiRightArrow/>
        </div>
    )
}