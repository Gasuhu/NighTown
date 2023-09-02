import React , { useState, useEffect } from 'react';
import videoSource from './background.mp4';
import './background.css';
import {BrowserRouter} from 'react-router-dom'
import { socket } from './socket';
import Rout from './component/rout';
import {Events} from './component/Events'
import { ConnectionState } from './component/ConnectionState';
import { ConnectionManager } from './component/ConnectionManager';
import { MyForm } from './component/MyForm';





function App() {

  const [isConnected, setIsConnected] = useState(socket.connected);
  const [fooEvents, setFooEvents] = useState([]);

  useEffect(() => {
    function onConnect() {
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
    }

    function onFooEvent(value) {
      setFooEvents(previous => [...previous, value]);
    }

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on('foo', onFooEvent);

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off('foo', onFooEvent);
    };
  }, []);
  return (
    
    <BrowserRouter>
    <ConnectionState isConnected={ isConnected } />
    <Events events={ fooEvents } />
    <ConnectionManager />
    <Rout/>
    <div className="video-background">
    <video autoPlay loop muted className="video">
      <source src={videoSource} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    {/* Other content can be added on top of the video */}
  </div>

  </BrowserRouter>
  );
}

export default App;
