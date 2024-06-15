import React, {useState, useRef} from "react";
function UseRefe(){
    let inputRef = useRef(null);
    function controlInput(){
    //  inputRef.current.style.display = "none";
     inputRef.current.style.color = "red";
    //  inputRef.current.focus();
    }
    return(
        <div>
            <h1>UseRef in React</h1>
            <input type="text" ref={inputRef} />
            <button onClick={controlInput}>button</button>
        </div>
    )
}
export default UseRefe;
