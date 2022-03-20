import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Index";
import Zap from "./Pages/Zap/Zap";


export default function App(){
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/Zap" element={<Zap />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}