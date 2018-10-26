import React, { Component } from 'react';
import ChatMessage from './ChatMessage'


class ChatScreen extends Component{
    
    render(){
        return(
            <div className='dib mt6 shadow-3'>
                <ChatMessage/>
            </div>
        );
    }
}

export default ChatScreen