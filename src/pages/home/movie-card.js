import './home.css';
import React, { Component } from "react";


export default class Movies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch("https://api.tvmaze.com/shows?page=1")
        .then( res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    items: result.id
                });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });  
            }
        )
    }

    render() {
       const {error, isLoaded, items} = this.state;
       if (error) {
        return <p> Error {error.message} </p>
       } else if (!isLoaded) {
        return <p> Loading... </p>
       } else {
        return (
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        {item.name}
                        <img src={item.image.medium} />
                    </li>
                ))}
            </ul>
        )
       }
    }
}


































/*const products = [ 
  {
    "id": 250,
    "url": "https://www.tvmaze.com/shows/250/kirby-buckets",
    "name": "Kirby Buckets",
    "type": "Scripted",
    "language": "English",
    "genres": [
        "Comedy"
    ],
    "status": "Ended",
    "runtime": 30,
    "averageRuntime": 30,
    "premiered": "2014-10-20",
    "ended": "2017-02-02",
    "officialSite": "http://disneyxd.disney.com/kirby-buckets",
    "schedule": {
        "time": "07:00",
        "days": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
        ]
    },
    "rating": {
        "average": null
    },
    "weight": 58,
    "network": {
        "id": 25,
        "name": "Disney XD",
        "country": {
            "name": "United States",
            "code": "US",
            "timezone": "America/New_York"
        },
        "officialSite": null
    },
    "webChannel": {
        "id": 83,
        "name": "DisneyNOW",
        "country": {
            "name": "United States",
            "code": "US",
            "timezone": "America/New_York"
        },
        "officialSite": null
    },
    "dvdCountry": null,
    "externals": {
        "tvrage": 37394,
        "thetvdb": 278449,
        "imdb": "tt3544772"
    },
    "image": {
        "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/1/4600.jpg",
        "original": "https://static.tvmaze.com/uploads/images/original_untouched/1/4600.jpg"
    },
    "summary": "<p>The single-camera series that mixes live-action and animation stars Jacob Bertrand as the title character. <b>Kirby Buckets</b> introduces viewers to the vivid imagination of charismatic 13-year-old Kirby Buckets, who dreams of becoming a famous animator like his idol, Mac MacCallister. With his two best friends, Fish and Eli, by his side, Kirby navigates his eccentric town of Forest Hills where the trio usually find themselves trying to get out of a predicament before Kirby's sister, Dawn, and her best friend, Belinda, catch them. Along the way, Kirby is joined by his animated characters, each with their own vibrant personality that only he and viewers can see.</p>",
    "updated": 1617744408,
    "_links": {
        "self": {
            "href": "https://api.tvmaze.com/shows/250"
        },
        "previousepisode": {
            "href": "https://api.tvmaze.com/episodes/1051658"
        }
    }
},   
]*/           

/*function MovieCards() {

  
  return (
                   
    fetch('https://api.tvmaze.com/shows?page=1')
      .then(response => response.json())
      .then(products => {

        const page = new MovieCards(products);

      })
    
  )
}


export const TvShows = () => {
  const createArray = (size) => [...new Array(size)]
  return (
    <div className="wrapper">
        {
          createArray(1).map((el, index) => <MovieCards />)
        }
    </div>
  );
}*/

/*<div className='cards'>                
        <div className='shows'>           
            <a href="/"><img className='image' src= "https://static.tvmaze.com/uploads/images/medium_portrait/1/4600.jpg" alt="slide" /></a>
            <div className='raiting'>
                <svg xmlns="http://www.w3.org/2000/svg"  width="16" height="16" fill="currentColor" className='star'  viewBox="0 0 16 16">
                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                </svg>
                <span className='span'>6.8</span>   
            </div>     
            <p className="text-name">Black Widow</p>
        </div>     
      </div>*/



//export default TvShows;