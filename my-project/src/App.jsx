import { useState } from 'react';
import './index.css'

function ColorChanger() {

  const [Color,setColor]=useState('Olive');


  return (
    <>

    <div className='text-white flex flex-wrap justify-center items-end text-xl  h-screen w-full '
    style={{backgroundColor:Color}}>

      <div className=' flex flex-wrap justify-center items bg-slate-100 mb-4  rounded-2xl '>

      <button  onClick={() => setColor("red") }
       className='w-32 h-10 m-4 rounded-xl' 
      style={{backgroundColor:"red"}}> Red</button>

      <button onClick={() => setColor("green")} 
      className=' w-32 h-10 m-4 rounded-xl '
      style={{backgroundColor:"green"}}>Green</button>

      <button onClick={() => setColor("blue")} 
      className=' w-32 h-10 m-4 rounded-xl'
      style={{backgroundColor:"blue"}}>Blue</button>
 
      <button onClick={() => setColor("yellow")} 
      className=' w-32 h-10 m-4 rounded-xl'
      style={{backgroundColor:"yellow"}}>Yellow</button>
      
      <button onClick={() => setColor("purple")}
       className=' w-32 h-10 m-4 rounded-xl'
      style={{backgroundColor:"purple"}}>Purple</button>

      <button onClick={() => setColor("pink")} 
      className=' w-32 h-10 m-4 rounded-xl'
      style={{backgroundColor:"pink"}}>Pink</button>
 
      <button onClick={() => setColor("orange")} 
      className=' w-32 h-10 m-4 rounded-xl'
      style={{backgroundColor:"orange"}}>Orange</button>

      <button onClick={() => setColor("black")} 
      className='w-32 h-10 m-4 rounded-xl'
      style={{backgroundColor:"black"}}>Black</button>

      <button onClick={() => setColor("brown")} 
      className='w-32 h-10 m-4 rounded-xl'
      style={{backgroundColor:"brown"}}>Brown</button>


      </div>

    </div>
      
    </>
  );
  
}

export default ColorChanger;
