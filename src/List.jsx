import React from "react";
import { useState } from "react";

function List(){

    let listMenu = [1,2,3]
    let [listMenu1 , setList] = useState((listMenu));
    // let copyList = [...listMenu]



    return(
      
       <div style={{display : 'flex' }}>
         
         {
            listMenu1.map((e , i)=>{
              return(
                <li style={{color : '#fff' , listStyle : 'none' , margin : '0 20px'}}>menu{i + 1}</li>
              )   
            })
         }

       </div>

    )
}


export default List;