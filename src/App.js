import { Routes, Route } from 'react-router-dom';
import './App.scss';
import { Home } from "./pages/home/Home";
import { ShowDetail } from "./pages/showDetail/ShowDetail";
import { SuggestMe } from "./pages/suggestMe/SuggestMe";
import {Input} from "./components/Input/Input"
import { useState } from 'react';

function App() {

  
  // const [text, setText]= useState("");

  // const onchangeFunc = (event) => {
  //   setText(event.target.value);
  // }
  // const onclickFunc = (event) => {
  //   setText("");
  // }

  return (
    <div>
            {/* <Input text={text} onchangeFunc = {onchangeFunc} onclickFunc = {onclickFunc}></Input> */}
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/showDetail" element = {<ShowDetail/>}/>
        <Route path="/suggestMe" element = {<SuggestMe/>}/>  
      </Routes>
    </div>
  );
}

export default App;
 