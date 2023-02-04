import React from "react";
import style from './Result.module.css'
import Nav from "../nav/Nav";
const Result=(props)=>{
    // console.log(props.value.class)
    let class1=props.value.val.class=='Tomato_Healthy'?"#54B435":"#FF2400"
    console.log(class1)
    

    return(
        <div className={style.topcon}>
            <div className={style.navbar}>
                <Nav/>
            </div>
        <div className={style.card}>

            <div className={style.cardin}>
                <img className={style.img} src={props.value.previewUrl} alt="img"/>
            </div>

        </div>
      
        <div className={style.rescard}>  
        <div className={style.rescon}>

            <h1 className={style.modify} style={{color:"black"}}>Here Is The Condition Of Your Plant</h1>
           <h1  className={style.modify}  style={{color: class1}}> {props.value.val.class}</h1>
           <h1  className={style.modify} style={{color:"black"}}>{props.value.val.confidence}%</h1>
        </div>
        </div>
        </div>
    )

}
export default Result