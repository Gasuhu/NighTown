import React from 'react';
import videoSource from './background.mp4';
import './background.css';
import {BrowserRouter} from 'react-router-dom'
import Rout from './component/rout';
function App() {
  return (
    <BrowserRouter>
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
