import React from 'react';
import TvShows from './sugTvShows';
import { Link } from "react-router-dom";

export const SuggestMe = () => {
    return (
        <>
        
            <h1>SuggestMe</h1>
            <h4>I will really appericiate it if you take time to suggest me something good to watch.</h4>
            <TvShows />
            <h2>Didn’t find the one you looking for?</h2>
            <div className='sug-btn'>
            <Link className='sug-a' to = {"/"}>
              <button className='btn'>Back to the main list</button>
            </Link>  
            </div> 
        </>
    )
};

