import { Routes, Route } from 'react-router-dom';
import './App.scss';
import { Home } from "./pages/home/Home";
import { ShowDetail } from "./pages/showDetail/ShowDetail";
import { SuggestMe } from "./pages/suggestMe/SuggestMe";

function App() {
  return (
    <div>
      {/* <PaginationComponent count = {20} defoultPage = {number} setNumber = {setNumber}/> */}
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/showDetail" element = {<ShowDetail/>}/>
        <Route path="/suggestMe" element = {<SuggestMe/>}/>  
      </Routes>
    </div>
  );
}

export default App;
 