import UserContextProvider from "./Context/UserContextProvider"
import Login from "./components/Login"
import Profile from "./components/Profile"


function App() {
  

  return (
    <UserContextProvider>
      <h1 className="text-centre bg-green-200">Welcome to the Context API</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App;
