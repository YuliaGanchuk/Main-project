import React, { useState } from "react";
import TvShows from "./tvShows.js";
import { Input } from "./../../components/Input/Input";
import { PaginationComponent } from "./../../components/Pagination/pagination";

export const Home = () => {
  const [text, setText] = useState("");
  const [number, setNumber] = useState(1);
  const [pageNum, setPageNum] = useState(1);
  const onchangeFunc = (event) => {
    setText(event.target.value);
    setNumber(1);
  };
  const onclickFunc = (event) => {
    setText("");
  };
  return (
    <>
      <div className="contHome">
        <div className="homeTextContainer">
          <p className="nameText">MaileHereko</p>
          <h1 className="pText">TV Shows</h1>
          <Input
            text={text}
            onchangeFunc={onchangeFunc}
            onclickFunc={onclickFunc}
          ></Input>
        </div>
      </div>
      <TvShows
        text={text}
        setText={setText}
        pageNum={pageNum}
        setPageNum={setPageNum}
        numberSelectedPage={number}
      />
      <PaginationComponent
        count={pageNum}
        defoultPage={number}
        setNumber={setNumber}
      />
    </>
  );
};
