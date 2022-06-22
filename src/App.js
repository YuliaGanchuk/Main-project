import Header from './components/Header/header.js';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import { Home } from "./pages/home/Home";
import { ShowDetail } from "./pages/showDetail/ShowDetail";
import { SuggestMe } from "./pages/suggestMe/SuggestMe";
import Items from './components/Header/items.js';
import Movies from './pages/home/movie-card.js';

function App() {
  return (
    <div>
      <Header />
      <Items />
      <Movies />
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/showDetail" element = {<ShowDetail/>}/>
        <Route path="/suggestMe" element = {<SuggestMe/>}/>  
      </Routes>
    </div>
  );
}

export default App;
 