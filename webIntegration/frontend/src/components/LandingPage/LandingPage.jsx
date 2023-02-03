import React from "react";
import style from './LandingPage.module.css'
import tomato from '../../image/tomato.png'
import App from "./TextSide/app";
const LandingPage=()=>{
    


    return (
        <div className={style.container}>

        <div className={style.text}>
            <App/>
        </div> 
        {/* <div className={style.image}>
            <img className={style.img} src={tomato}/>
        </div> */}
          
        </div>

    )

}
export default LandingPage