import React, { useContext, useState } from 'react'
import UserContext from '../Context/UserContext';
import UserContextProvider from '../Context/UserContextProvider';


function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }
  return (
    <div>
        <h2>Login</h2>

        <label htmlFor="username">Username :</label>
        <input id='username'
        type='text'
        value={username}
        onChange={(e) => setUsername(e.target.value) }
        placeholder='username'  />
        {" "}

        <label htmlFor="password">Password : </label>
        <input id='password'
        type='text' 
        value={password}
        onChange={(e) => setPassword(e.target.value) }
        placeholder='password'  />
        
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login