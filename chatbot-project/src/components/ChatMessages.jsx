import { useRef, useEffect } from 'react'
import { ChatMessage } from './ChatMessage';
import './ChatMessages.css'

function ChatMessages({chatMessages}){
    const chatMessagesRef = useRef(null);
    useEffect(()=>{
        const containerElem = chatMessagesRef.current;
        if(containerElem){
            containerElem.scrollTop = containerElem.scrollHeight;
        }
    },[chatMessages]);
    return (
        <div className = "chat-messages-container" ref = {chatMessagesRef} >
    {chatMessages.map((Chatmessage) => {
        return (
            <ChatMessage 
                message = {Chatmessage.message}
                sender = {Chatmessage.sender}
                key = {Chatmessage.id}
            />
        );
  })}
  </div>
  );
  } 
  
  export default ChatMessages; 