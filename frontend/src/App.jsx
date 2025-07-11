import { useEffect, useState } from 'react'
import './App.css'
import { Button, ButtonGroup } from "@chakra-ui/react";
import {Routes, Route} from "react-router-dom";
import Homepage from './components/Homepage';
import Chatpage from './components/Chatpage';
function App() {
  const [message, setMessage] = useState('Loading...')

	  useEffect(() => {
	    fetch('/api/chat') // Vite will proxy this to http://localhost:5000/api/hello
	      .then((res) => res.json())
	      .then((data) => setMessage(data.message))
	      .catch((err) => setMessage('Error: ' + err.message))
	  }, [])

  return (
    <>
    
      <Routes>
        <Route path="/" element={<Homepage/>} exact />
        <Route path="/chats" element={<Chatpage/>} />
      </Routes>

    </>
  )
}

export default App
