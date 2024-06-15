import React,{useRef} from "react";
import ForwardRefChild from "./ForwardRefChild";
function ForwardRef(){
    let inputRef = useRef(null);
    function updateInput(){
      inputRef.current.value="3000"
    }
    return(
        <div>
            <h1>ForwardRef in React</h1>
            <ForwardRefChild ref={inputRef} />
            <button onClick={updateInput}>Update Input Box</button>
        </div>
    )
}
export default ForwardRef;