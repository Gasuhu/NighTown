import React , { useState, useEffect } from "react";
import "./game.css"
import {MdSunny} from 'react-icons/md';
import {BsMoonFill} from 'react-icons/bs'
import {IoIosArrowDropright} from 'react-icons/io'
import { socket } from '../socket';

import { io } from 'socket.io-client';
function sendMessage(message)
{
  socket.emit('chat message', message);
}

const submitButton=()=>
{
    let message=document.getElementsByTagName('input')[0].value
    if( message !=="")
    {

        
        sendMessage(message)
        document.getElementsByTagName('input')[0].value=""
  
       
    }
}
function inKeyDownSubmit(event)

{
if (event.key === 'Enter') {
    document.getElementsByTagName("button")[0].click()
}
}

const Game = ({user}) =>
{
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        let socket1=io("https://server2-ap0s.onrender.com")
        socket1.on('chat message', (message) => {

          setMessages((prevMessages) => [...prevMessages, message]);
          
          setTimeout(() => {
            let chatbox=document.getElementsByClassName("chat-container")[0]
            chatbox.scroll({top: chatbox.scrollHeight, behavior: "smooth" })
          }, 100);          
        });
        return () => {
            socket1.disconnect(); // Disconnect the socket when the component unmounts
          };
    },[]);
    return (
        <>    
    <div className="day-night">
            <div className="day">
                <div className="activate timer"><MdSunny/>0:45</div>
            </div>
            <div className="night">
                <div className="desactivate timer"><BsMoonFill/>its not night</div>
            </div>
        </div>

    <div className="chat-container" >
        <div className="chat-message user-message">
        Salut, comment ça va ?
        </div>
        <div className="chat-message bot-message">
        Bonjour ! Je suis un chatbot.
        </div>
        <div className="chat-message user-message">
        Pouvez-vous me donner des recommandations de films ?
        </div>
        <div className="chat-message bot-message">
        Bien sûr ! Quel genre de films préférez-vous ?
        </div>
        <div className="chat-message user-message">
        Salut, comment ça va ?
        </div>
        <div className="chat-message bot-message">
        Bonjour ! Je suis un chatbot.
        </div>
        <div className="chat-message user-message">
        Pouvez-vous me donner des recommandations de films ?
        </div>
        <div className="chat-message bot-message">
        Bien sûr ! Quel genre de films préférez-vous ?
        </div>
        <div className="chat-message user-message">
        Salut, comment ça va ?
        </div>
        <div className="chat-message bot-message">
        Bonjour ! Je suis un chatbot.
        </div>
        <div className="chat-message user-message">
        Pouvez-vous me donner des recommandations de films ?
        </div>
        <div className="chat-message bot-message">
        Bien sûr ! Quel genre de films préférez-vous ?
        </div>
        {
        messages.map((message, index) => (
            <div key={index} className="chat-message user-message"> {user.displayName} : {message}</div>
          ))
          
          }
    </div>


    
    <div className="input-message">
        <input type="text" placeholder="Type here"  onKeyDown={inKeyDownSubmit}></input>
        <button type="submit" onClick={submitButton}> <p> <IoIosArrowDropright/></p> </button>

    </div>
    
        </>
    )
}
export default Game