
import './App.css'
import Login from './components/Login'
import Profile from './components/profile'
import UsercontextProvider from './context/UserContextProvider'

function App() {
  

  return (
    <UsercontextProvider>
      <h1>React with Chai and share is important</h1>
      <Login />
      <Profile />
    </UsercontextProvider>
  )
}

export default App