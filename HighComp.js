import React, { useState } from "react";
function HighComp(){
   
   

function Counter(){
    const[count,setCount] = useState(0);
    return(
        <div>
            <h3>HOC</h3>
            <h3>{count}</h3>
            <button onClick={()=>setCount(count+1)}>Update</button>
        </div>
    )
}
function HOCRed(props){
    return <h1 style={{backgroundColor:'red', width :100}}>Red<props.cmp /></h1>
}
return(
    <div>
        <HOCRed cmp={Counter} />
    </div>
    
)
}
export default HighComp;
