import React, { Component } from 'react';
import ChatScreen from './Components/ChatScreen.js'
import './App.css';
import Particles from 'react-particles-js';




const particleOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enabled: true,
        value_area: 800
      }
    }
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">

        <Particles className='particles'
              params={particleOptions}
            />
        <h1 className='white'>Question Answering Chatbot System</h1>
        <p className='white f4 fw4'>Human-Computer Interaction project by <strong>IEEE-VIT</strong></p>
        <ChatScreen/>
      </div>
    );
  }
}

export default App;
