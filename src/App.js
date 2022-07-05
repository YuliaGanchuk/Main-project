
import Header from './components/Header/header.js';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import { Home } from "./pages/home/Home";
import { ShowDetails } from "./pages/showDetail/ShowDetails";
import { SuggestMe }  from "./pages/suggestMe/SuggestMe";
import { Page404 } from "./pages/Page404/Page404";



function App() {

  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/show-details/:id" element={<ShowDetails />} />
        <Route path="/suggestMe" element={<SuggestMe />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;
