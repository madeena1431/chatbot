import UserProfileImage from '../assets/user.png';
import RobotProfileImage from '../assets/robot.png';
import './ChatMessage.css';
export function ChatMessage({ message ,sender }){
    return (
        <div className = {sender === 'human' ? 'chat-human' : 'chat-robot'}>
            {sender === "robot" && <img src = {UserProfileImage} className = "image" /> }
            <div className = "chat-message">{message}</div>
            {sender === "human" && <img src = {RobotProfileImage} className = "image" /> }
        </div>
    );
  }