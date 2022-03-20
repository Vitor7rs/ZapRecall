import './style.css';
import logo from '../../Assets/logo.png';

export default function Logo(){
    return(
        <div className='LogoDiv'>
            <img src={logo} alt="ZapLogo" />
            <h1 className="title">ZapRecall</h1>
        </div>
    )
}