import React from 'react';
import { Link } from "react-router-dom";


const Footer = () => {
    return (
      <div className="footer">
        <div className="top">
          <div className="left">
            <div className="title">
              <Link to="/">
                <img
                  id="logoImg"
                  src="https://cdn.discordapp.com/attachments/840237326700904451/915133473033973760/logo.jpeg"
                  alt="logo"
                ></img>
                <h2>GameCrit</h2>
              </Link>
            </div>
            <div>
              <p>
                A Game review website for passionate Gamers to read game
                description and system requirements for the game they want to
                buy and make right choice !!
              </p>
            </div>
          </div>

          <div className="line"></div>

          <div className="right">
            <li>
              <Link to="/games/shooter">Shooter</Link>
            </li>
            <li>
              <Link to="/games/sports">Sports</Link>
            </li>
            <li>
              <Link to="/games/strategy">Strategy</Link>
            </li>
            <li>
              <Link to="/games/open-world">OpenWorld</Link>
            </li>
            <li>
              <Link to="/games/superhero">Superhero</Link>
            </li>
            <li>
              <Link to="/games/anime/">Anime</Link>
            </li>
            <li>
              <Link to="/games/racing">Racing</Link>
            </li>
            <li>
              <Link to="/games/horror">Horror</Link>
            </li>
          </div>
        </div>

        <div className="horidiv"></div>

        <div className="bottom">
          <div>
            Made with <span>❤️</span> By Gamers
          </div>
          <div className="fade">@2021 All rights reserve</div>
        </div>
      </div>
    );
}

export default Footer;