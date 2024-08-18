import "./App.css";
import { useState } from "react";

function App() {
  const [color, setColor] = useState("yellow");

  return (
    
      <div className=" h-screen w-full" style={{backgroundColor: color}}>


      <div className="fixed text-white flex justify-center bottom-10 inset-x-2 px-2 " >
          <div className="flex border-2 border-black rounded-lg p-2 justify-center bg-white px-3 py-3 gap-3">

            <button
            onClick={() => setColor("red")} 
            className=" text-white px-4 py-2 shadow-3xl cursor-pointer rounded-3xl" style={{backgroundColor: "red"}} >Red</button>

            <button 
            onClick={() => setColor("black")}
            className=" text-white px-4 py-2 shadow-3xl cursor-pointer rounded-3xl"  style={{backgroundColor: "black"}}>black</button>

            <button
            onClick={() => setColor("green")}
            className=" text-white px-4 py-2 shadow-3xl cursor-pointer rounded-3xl"  style={{backgroundColor: "green"}}>green</button>

            <button
            onClick={() => setColor("grey")}
            className=" text-white px-4 py-2 shadow-3xl cursor-pointer rounded-3xl"  style={{backgroundColor: "gray"}}>Gray</button>
          

          </div>

      </div>


 
      </div>
      
   
  );
}

export default App;
