import {React} from "react";
import style from './app.module.css'
import Button from "../../Button/Button";
import { useNavigate } from "react-router-dom";

const App = () => {
    const navigate=useNavigate()
    const onClickHandler=()=>{
        navigate("/detector")
    }
    return(
        <div className={style.container}>
            
            <h1>Check Your Plant's Health Here</h1>
           <div onClick={onClickHandler}>
            <Button  value={"Try It!"} type={"cancel"}/>
           </div>
        </div>
      
    )
};

export default App;
