import React from "react";
import "./game.css"
import {MdSunny} from 'react-icons/md';
import {BsMoonFill} from 'react-icons/bs'
import {IoIosArrowDropright} from 'react-icons/io'

const submitButton=()=>
{
    if( document.getElementsByTagName('input')[0].value!="")
    {
        var newDiv = document.createElement('div');
        newDiv.textContent=document.getElementsByTagName('input')[0].value
        newDiv.className="chat-message user-message"
        let chatbox=document.getElementsByClassName("chat-container")[0]
        chatbox.appendChild(newDiv)
        chatbox.scroll({top: 2000, behavior: "smooth" })
        document.getElementsByTagName('input')[0].value=""
    }
}
function inKeyDownSubmit(event)

{
if (event.key === 'Enter') {
    document.getElementsByTagName("button")[0].click()
}
}

const Game = () =>
{
    return (
        <>    
    <div class="day-night">
            <div class="day">
                <div class="activate timer"><MdSunny/>0:45</div>
            </div>
            <div class="night">
                <div class="desactivate timer"><BsMoonFill/>its not night</div>
            </div>
        </div>

    <div class="chat-container">
        <div class="chat-message user-message">
        Salut, comment ça va ?
        </div>
        <div class="chat-message bot-message">
        Bonjour ! Je suis un chatbot.
        </div>
        <div class="chat-message user-message">
        Pouvez-vous me donner des recommandations de films ?
        </div>
        <div class="chat-message bot-message">
        Bien sûr ! Quel genre de films préférez-vous ?
        </div>
        <div class="chat-message user-message">
        Salut, comment ça va ?
        </div>
        <div class="chat-message bot-message">
        Bonjour ! Je suis un chatbot.
        </div>
        <div class="chat-message user-message">
        Pouvez-vous me donner des recommandations de films ?
        </div>
        <div class="chat-message bot-message">
        Bien sûr ! Quel genre de films préférez-vous ?
        </div>
        <div class="chat-message user-message">
        Salut, comment ça va ?
        </div>
        <div class="chat-message bot-message">
        Bonjour ! Je suis un chatbot.
        </div>
        <div class="chat-message user-message">
        Pouvez-vous me donner des recommandations de films ?
        </div>
        <div class="chat-message bot-message">
        Bien sûr ! Quel genre de films préférez-vous ?
        </div>
    </div>

    <div class="input-message" onKeyDown={inKeyDownSubmit}>
        <input type="text" placeholder="Type here"></input>
        <button type="submit" onClick={submitButton}> <p> <IoIosArrowDropright/></p> </button>

    </div>
    
        </>
    )
}
export default Game