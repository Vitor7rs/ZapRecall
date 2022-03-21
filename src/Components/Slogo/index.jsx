import './style.css';
import logo from '../../Assets/logo-pequeno.png';

export default function Slogo(){
    return(
        <div className="smallLogo">
            <img src={logo} alt="" />
            <h1>ZapRecall</h1>
        </div>
    )
}