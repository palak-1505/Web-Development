import { useState,useEffect, useCallback,useRef } from 'react';
import './index.css';


function App() {
     

  const [Password,setPassword] = useState("");
  const [Length,setLength] = useState(8);
  const [NumberAllowed , setNumberAllowed] = useState(false);
  const [CharAllowed , setCharAllowed] = useState(false);

  const passwordRef= useRef(null);
  
  const passwordGenerator = useCallback(()=>{

    let pass ="";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(NumberAllowed){
      str +="0123456789";
    }
    if(CharAllowed){
      str += "@_.&%$-";
    }

    for(let i = 1 ; i <= Length ; i++){
      let char = Math.floor(((Math.random()*str.length)+1));
       pass += str.charAt(char);
    }

    setPassword(pass);

  }, [Length,NumberAllowed,CharAllowed,setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 99);
    window.navigator.clipboard.writeText(Password)
  }, [Password])




  useEffect(()=>passwordGenerator(),
  [Length,NumberAllowed,CharAllowed,passwordGenerator]);


  return (
    <>
      <div className='w-full max-w-md mx-auto  shadow-md rounded-lg px-4 py-3 my-64 bg-gray-800 text-orange-500'>
         
        <h1 className='text-white text-4xl text-center m-4'>Password Generator</h1>
      

        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
          type="text"
          value={Password}
          readOnly 
          ref={passwordRef}
          className="outline-none w-full py-1 px-3" />

          <button 
          onClick={copyPasswordToClipboard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          >Copy</button>

        </div>

        <div className='flex text-s gap-2 mb-4'>
          <input type='range'
          min={6}
          max={99}
          value={Length} 
          className='cursor-pointer'
          onChange={(e)=>setLength(e.target.value)}
          />

          <label>Length {Length}</label>

          <input 
          type="checkbox"
          defaultChecked={NumberAllowed}
          id='numberInput'
          onChange={
            ()=> setNumberAllowed((prev)=>!prev)
            } />
          <label>Numbers</label>

          <input 
          type="checkbox" 
          defaultChecked={CharAllowed}
          id='charInput'
          onChange={
            ()=>setCharAllowed((prev)=>!prev)
            }/>
          <label>Characters</label>
        </div>

      </div>

      

    </>
  )
}

export default App
