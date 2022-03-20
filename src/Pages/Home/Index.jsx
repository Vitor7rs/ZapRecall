import Logo from "../../Components/Logo/Index";
import './style.css';
import { useNavigate } from "react-router-dom";


export default function Home(){
    const navigate = useNavigate();

    return(
        <main className="homeMain">
            <Logo />
            <button onClick={()=>navigate('/zap')}>Iniciar Recall</button>
        </main>
    )
}