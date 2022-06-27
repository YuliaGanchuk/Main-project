import React, { useState, useEffect} from 'react';
import TvShows from './tvShows.js';
import { Input } from './../../components/Input/Input';
import {PaginationComponent} from './../../components/Pagination/pagination';


export const Home = () => {

const [text, setText]= useState("");
const [number, setNumber]= useState(1);
const onchangeFunc = (event) => {
setText(event.target.value);
}
const onclickFunc = (event) => {
    setText("");
  }
  useEffect(() => {
    console.log(text);
  },[text]);

    return (
    <>

    <Input text={text} onchangeFunc = {onchangeFunc} onclickFunc = {onclickFunc}></Input>
    <TvShows searchText= {text}/>
    <PaginationComponent count={12} defoultPage={number} setNumber = {setNumber} />
    </>);
}


