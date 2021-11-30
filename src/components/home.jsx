import React from 'react';
import Game from './game';
import Navbar from './navbar';
import Slideshow from './Slideshow';

const Home = () => {
  var images = [
    {
      image:
        "https://cdn.discordapp.com/attachments/840237326700904451/892287477820293120/191554.jpg",
    },
    {
      image: "https://wallpapercave.com/wp/wp5766437.jpg",
    },
    {
      image: "https://wallpapercave.com/wp/wp7346844.jpg",
    },
    {
      image: "https://wallpapercave.com/wp/wp6921947.jpg",
    },
    {
      image:
        "https://cdn.discordapp.com/attachments/840237326700904451/892287786282024981/1149777.jpg",
    },
  ];
    return (
      <div className="home">
        <Navbar />
        <div className="front">
          <div className="slideshow">
            <Slideshow images={images} />
          </div>
        </div>
        <div className="back">
          <div className="heading">
            <h2 id="catNav">Categories</h2>
          </div>
          <div className="dividerCat"></div>
          <Game/>
        </div>
        <br />
      </div>
    );
}

export default Home;



