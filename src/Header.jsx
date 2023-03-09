import React from "react";
import { useState } from "react";
import apple from './image/applelogo.png'
import List from "./List";

  const style1 = {
    bigBox : {
        width : '100vw' ,
        height : '50px' ,
        backgroundColor : 'black' ,
        display : 'flex' ,
        justifyContent : 'space-between' ,
        alignItems : 'center'
    },
    logo : {
        width : '40px'
        
    }
  }






function Header(){
    return(
      <div style={style1.bigBox}>
        <div>
            <img src={apple} alt="logo" style={style1.logo} />
        </div>
        <div>
           <List></List>
        </div>
      </div>
    )
}

export default Header ;