import { useState } from 'react'
import { ChatInput } from './components/ChatInput';
import  ChatMessages  from './components/ChatMessages';
import './App.css'

function App(){
  const [ chatMessages , setChatMessages ] = useState([
      
  ]);
  // const [ ChatMessages , setChatMessages ] = array; // similar to the next two lines
  // const ChatMessages = array[0];
  // const setChatMessages = array[1];
  
  return(
      <div className = "app-container">
           <ChatMessages 
              chatMessages = {chatMessages}
           />
           <ChatInput 
              chatMessages = {chatMessages}
              setChatMessages = {setChatMessages}
           />
          </div>
  );
} 

export default App
