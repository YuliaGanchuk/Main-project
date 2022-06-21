import { Routes, Route } from 'react-router-dom';
import './App.scss';
import { Home } from "./pages/home/Home";
import { ShowDetail } from "./pages/showDetail/ShowDetail";
import { SuggestMe } from "./pages/suggestMe/SuggestMe";
import Pengination from "./components/Pagination/pengination.js"
import { useEffect, useState } from 'react';



function App() {
  // Pengination ----------------------------
  // const [number, setNumber] = useState(1)
  // useEffect(()=>{
  //   console.log(number)
  // },[number])
  // ----------------------------------------
  return (
    <div>
      {/* <Pengination count = {20} defoultPage = {number} setNumber = {setNumber}/> */}
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/showDetail" element = {<ShowDetail/>}/>
        <Route path="/suggestMe" element = {<SuggestMe/>}/>  
      </Routes>
    </div>
  );
}

export default App;
 