import React from "react";
import'./Button.css'
import { useNavigate } from "react-router-dom";
const Button=(props)=>{

    const class1="button cancel-btn"
    const class2="button accept-btn"
    return(
        
        <div className="ta-c padT150 padB150">
        <button className={props.type=="cancel"?class1:class2}>
        {props.value}
        </button>
        </div>
    )

}

export default Button
