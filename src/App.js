import { Routes, Route } from "react-router-dom";
import "./App.scss";
import { Home } from "./pages/home/Home";
import { ShowDetail } from "./pages/showDetail/ShowDetails";
import { SuggestMe } from "./pages/suggestMe/SuggestMe";
import { Page404 } from "./pages/Page404/Page404";

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
      {/* <Input text={text} onchangeFunc = {onchangeFunc} onclickFunc = {onclickFunc}></Input> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/showDetail" element={<ShowDetail />} />
        <Route path="/suggestMe" element={<SuggestMe />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;
