import { useEffect, useState } from 'react'
import './App.css'
import {Routes, Route} from "react-router-dom";
import Homepage from './components/Pages/Homepage';
import Chatpage from './components/Pages/Chatpage';
function App() {
  const [message, setMessage] = useState('Loading...')

	  useEffect(() => {
	    fetch('/api/chat') // Vite will proxy this to http://localhost:5000/api/hello
	      .then((res) => res.json())
	      .then((data) => setMessage(data.message))
	      .catch((err) => setMessage('Error: ' + err.message))
	  }, [])

  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Homepage/>} exact />
        <Route path="/chats" element={<Chatpage/>} />
      </Routes>
    </div>
    
      

  )
}

export default App
