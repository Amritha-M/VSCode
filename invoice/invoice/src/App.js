import './App.css';
import Router from './Router';
import React from 'react';
import Appheader from './components/Appheader/Appheader'
import Sidenavbar from './components/Sidenavbar/Sidenavbar';
import { BrowserRouter} from "react-router-dom"



function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <div className='appheader'>
          <Appheader/>
        </div>
        <div className='appcontent'>
          <div className='appsidenavbar'>
            <Sidenavbar/>
          </div>
          <div className='appbody'> 
              <Router/>
          </div> 
        </div>
      </div>
      </BrowserRouter>
  )
}

export default App;






