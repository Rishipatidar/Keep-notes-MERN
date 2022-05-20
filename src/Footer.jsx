
import React from "react";
var data=new Date();
var getyear=data.getFullYear();
const Footer=()=>{

    return(
        <>
        <h4 className="footer__des">CopyRight Reserved © {getyear}</h4>
        </>
    )
}

export default Footer;