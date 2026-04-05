import React from 'react'
import Page from './page.jsx'
import Home from './home.jsx'
import { Route, Routes } from "react-router-dom";
 const App = () => {
  return (
    <div className=''>
     
      <Routes>
          <Route path="/"  element={<Home/>} />
           <Route path="/pre"  element={<Page/>} />
      </Routes>
   
    </div>
  )
}
export default App;
