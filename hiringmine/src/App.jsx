import {
  BrowserRouter,
  Routes,
  Route,
  Link,
}  from "react-router-dom";
import { useState, useEffect, useRef } from 'react'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)


  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="jobsearch" element={<Jobs />}/>
      <Route path="peoplesearch/:userId" element={<PeopleProfile />}/>
      <Route path="peoplesearch" element={<PeopleSearch />}/>


    </Routes>    
    </BrowserRouter>
  )
}

export default App
