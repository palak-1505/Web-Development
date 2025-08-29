import { useState } from "react";
import Demo from "./demo";

function App() {

  //  let [count,setCount] = useState(0);

  //  let add = ()=>{
  //   if(count>=20){
  //     alert("Can't greater than 20");
  //   }
  //   else{
  //     setCount(count+1);
  //   }
  //  }

  //  let remove = ()=>{
  //   if(count==0){
  //     alert("Can't be negative number");
  //   }else{
  //   setCount(count-1);
  //   }
  //  }

  const [Color , setColor] = useState("blue");



  return (
    <>
     
      {/* <h1>Counter</h1>
      <h2>Count : {count}</h2>
      <button onClick={add}>Increase</button>
      <br />
      <button onClick={remove}>Decrease</button> */}

      <div className="flex justify">
        <div>
          <button>Green</button>
          <button>Yellow</button>
          <button>Red</button>
        </div>
      </div>
    </>
  )
}

export default App
