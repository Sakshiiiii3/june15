import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UseEff from './UseEff';
import MapFunction from './MapFunction';
import ReUse from './ReUse';
import UseRefe from './UseRefe';
import ForwardRef from './ForwardRef';
import ControlledComp from './ControlledComp';
import HighComp from './HighComp';
import Routing from './Routing';
import {BrowserRouter as Router} from "react-router-dom";
import Nav from './Nav';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <UseEff /> */}
    {/* <MapFunction /> */}
   {/* <ReUse /> */}
   {/* <UseRefe /> */}
   {/* <ForwardRef /> */}
   {/* <ControlledComp /> */}
   {/* <HighComp /> */}
   {/* <Routing /> */}
   <Router> <Routing /></Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
