import React from "react";
import {Route, Routes} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Nav from "./Nav";
import PageNotFound from "./pageNotFound";
function Routing(){
    return(
        <div>
           
           <Nav />
            <Routes>
          
           <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/*" element={<PageNotFound />}></Route>
           
           </Routes>
        </div>
    )

}
    
    

export default Routing