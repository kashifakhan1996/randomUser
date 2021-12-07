import React, { useState } from "react";
import './App.css';
import RandomResultsRow from './RandomResultsRow.js'
import fetchRandomData from './fetchRandomData.js'

const App =() =>{

  const [randomData, setrandomData] = useState([]);

  const OnClick = (async(e) =>{
    e.stopPropagation()
    fetchRandomData().then(person => {
        if(typeof person!=='undefined' && typeof person[0]!=='undefined'){
          setrandomData(person[0])
        }
        
    })
    
  }) 

  return (
    <div className="App" >
      <header className="App-header" style={{backgroundColor:"white","color":"black"}}>
        <a onClick={OnClick}>
          <i className='fas fa-sync-alt' style={{fontSize:'36px'}}></i>
        </a>
        <div className="clear"></div>
        
        <div style={{marginTop:"10px"}}>
          <RandomResultsRow randomData={randomData}/>
        </div>
      </header>
    </div>
  );
}

export default App;

