import map from './map.png';
import './App.css';
import React, {useState} from 'react'






function App() {
  const [size,setSize] = useState(1)
  const setMapSize = (full) =>  document.getElementById("map").style.width = full?"auto":(size*100).toString()+"%"
  
  const zoomIn = () => {
    setSize(size+.05)
    setMapSize(false)
  }

  const zoomOut = () => {
    setSize(size-.05)
    setMapSize(false)
  }

  const zoomFit = () => {
    setSize(1)
    setMapSize(false)
  }

  const zoomFull = () => {
    setMapSize(true)
  }

  const zoom = (e) => {
  if (e.type === "click"){ 
    if (e.ctrlKey)
    {
      zoomOut()
    }else{
     zoomIn()
    }
   
  }

  
}
const mouseOver = (e) => {
    if (e.ctrlKey){
      document.getElementById("map").style.cursor = "zoom-out"
    }else{
      document.getElementById("map").style.cursor = "zoom-in"
    }
  }
  return (
    <div className="App">
      <div className="map"  >
        <img src={map} id="map" className="App-map" alt="map" onClick={zoom} onMouseMove={mouseOver}/>
        
        </div>
        <div className="controls">
          <div className="zoom">
             <button className="control" onClick={zoomIn}>+</button>      
        <button className="control" onClick={zoomOut}>-</button>
        <button className="control" onClick={zoomFit}>Fit</button>
        <button className="control" onClick={zoomFull}>100%</button>
          </div>
       
        </div>
    </div>
  );
}

export default App;
