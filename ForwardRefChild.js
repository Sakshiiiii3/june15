import { forwardRef } from "react";
import React from "react";
function ForwardRefChild(props, ref){
    return(
        <div>
            <input type="text" ref={ref} />
        </div>
    )
}
export default forwardRef(ForwardRefChild);