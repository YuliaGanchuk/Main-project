
import Header from './components/Header/header.js';
import { Routes, Route } from 'react-router-dom';
import './App.scss';

import TvCards  from './pages/home/draft-card.js';
import { Home } from "./pages/home/Home";
import { ShowDetail } from "./pages/showDetail/ShowDetails";
import { SuggestMe } from "./pages/suggestMe/SuggestMe";
import Items from './components/Header/items.js';

function App() {
  return (
    <div>
      <Header />
      <Items />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/showDetail" element={<ShowDetail />} />
        <Route path="/suggestMe" element={<SuggestMe />} />
      </Routes>
      <TvCards />
    </div>
  );
}

export default App;
