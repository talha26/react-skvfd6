import React,{useState} from "react";
import "./style.css";

export default function App() {
  const[counter,setCounter]=useState(0);
  return (
    <div>
      {counter}
      <button onClick={()=>setCounter(counter+1)}></button>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
