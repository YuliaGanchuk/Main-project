
import Header from './components/Header/header.js';
import { Routes, Route } from 'react-router-dom';
import './App.scss';

import TvCards  from './pages/home/skeleton.js';
import { Home } from "./pages/home/Home";
import { ShowDetail } from "./pages/showDetail/ShowDetails";
import { SuggestMe } from "./pages/suggestMe/SuggestMe";
import { Page404 } from "./pages/Page404/Page404";
import Items from './components/Header/items.js';

function App() {
    //search component--------------------------------------------------------------
  // const [text, setText]= useState("");

  // const onchangeFunc = (event) => {
  //   setText(event.target.value);
  // }
  // const onclickFunc = (event) => {
  //   setText("");
  // }
  //-----------------------------------------------------------
  return (
    <div>
      <Header />
      <Items />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/showDetail" element={<ShowDetail />} />
        <Route path="/suggestMe" element={<SuggestMe />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <TvCards />
    </div>
  );
}

export default App;
