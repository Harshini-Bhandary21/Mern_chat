import React, { useEffect, useState } from 'react'
import axios from 'axios';
function Chatpage() {

    const [chats, setChats]= useState([]) // chats to display the data and setChats to change the data of chats variable.
    const fetchChats = async ()=>{
        const data = await axios.get('/api/chat'); // in order to use await keyword the function should be async.
        setChats(data.data); // in data there are varios aspects and if we write only data it gives us an error the map is not a function which we have writen below.
    };

    useEffect(()=>{   // useEffect is a hook in react which runs when the component is rendered for the first time.
        fetchChats();
    },[])
  return (
    <div>
        {/* if we ahve to write javascript in react we use curly braces. */}
        <div>
        <h2>Chats</h2>
        {
            chats.map(chat=>(
                <div key={chat._id}>{chat.chatName}</div>
            ))
        }
        </div>
    </div>
  )
}

export default Chatpage