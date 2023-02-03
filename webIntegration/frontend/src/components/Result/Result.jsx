import React from "react";
import style from './Result.module.css'
import Nav from "../nav/Nav";
const Result=(props)=>{
    // console.log(props.value.class)
    let class1=props.value.class=='Tomato_Healthy'?"#54B435":"#FF2400"
    console.log(class1)
    

    return(
        <div>
            <div className={style.navbar}>
                <Nav/>
            </div>
        
        <div className={style.rescon}>
      
            <h1 style={{color:"black"}}>Here Is The Condition Of Your Plant</h1>
           <h1 style={{color: class1}}> {props.value.class}</h1>
           <h1 style={{color:"black"}}>{props.value.confidence}%</h1>
        </div>
        </div>
    )

}
export default Result