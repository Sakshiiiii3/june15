import React,{useState} from "react";
function ControlledComp(){
    const [val,setVal] = useState();
  return(
    <div>
        <h2>Controlled Component</h2>
        <input type="text" value={val} onChange={(e)=>setVal(e.target.value)} />
        <h3>{val}</h3>
    </div>
  )
}
export default ControlledComp;