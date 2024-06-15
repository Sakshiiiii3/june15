import React, { useState, useMemo } from 'react';
import './App.css';
import User from './User';
import Child from './Child';

function App() {
  const user = [{name:"a",number:'1234',email:"user.com"},
    {name:"a",number:'1234',email:"user.com"},
    {name:"a",number:'124',email:"user.com"}
];
   
   const [count,setCount] = useState(0);
   const [item, setItem] = useState(0);
   const multiMemo = useMemo(
    function multiCount(){
      console.warn("MultiCount")
      return count*2;
       },[count]

   )
   function getData(name){
     alert(name);
   }
   
  return (
    <div className="App">
      
      {/* {
        user.map((item)=><User data={item} />)
      }

      <h4>Lifting state up</h4>
      <Child data={getData} />
      <h2>MultiCount :{multiMemo}</h2>
      <h2>item :{item}</h2>
      <button onClick={()=>setCount(count+1)}>button</button>
      <button onClick={()=>setItem(item+1)}>button</button> */}
    </div>
  );
}

export default App;
