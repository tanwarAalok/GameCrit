import React, { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectedProduct, removeSelectedProduct } from '../redux/actions/productActions';
import Slideshow from './Slideshow';
const GameDetails = () => {
  const game = useSelector((state) => state.product);
  const { gameId } = useParams();
  const dispatch = useDispatch();

 

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        url: "https://free-to-play-games-database.p.rapidapi.com/api/game",
        params: { id: gameId },
        headers: {
          "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
          "x-rapidapi-key":
            "0ca192bd34mshca25146e7ea1142p17a87ajsn20830dca802b",
        },
      };

      await axios
        .request(options)
        .then(function (response) {
          console.log("DetailData: ", response.data);
          dispatch(selectedProduct(response.data));
        })
        .catch(function (error) {
          console.error(error);
        });
    };
    if (gameId && gameId !== "") fetchData();
    return () => {
      dispatch(removeSelectedProduct());
    }
  }, [gameId, dispatch]);

    return (
      <div>
        {Object.keys(game).length === 0 ? (
          <>...Loading</>
        ) : (
          <div className="details">
            <div className="slideshow">
              <Slideshow images={game.screenshots} />
            </div>
            <br />
            <br />
            <div className="row">
              <div className="gameDetail">
                <div className="image">
                  <img src={game.thumbnail} alt="" />
                </div>
              </div>
              <div className="gameSpecs">
                <div className="head">
                  <h1>{game.name}</h1>
                  <h1>{game.title}</h1>
                  <br />
                  <h3>{game.short_description}</h3>
                </div>
                <br />
                <div className="divider"></div>
                <br />
                <br />

                <div className="feature">
                  <ul>
                    <li>
                      <span>Genre:</span> {game.genre}
                    </li>
                    <li>
                      <span>Publisher:</span> {game.publisher}
                    </li>
                    <li>
                      <span>Developer:</span> {game.developer}
                    </li>
                    <li>
                      <span>Release Date:</span> {game.release_date}
                    </li>
                  </ul>
                </div>
                <div className="system">
                  <ul>
                    <li>
                      <span>OS: </span>
                      {game.minimum_system_requirements.os}
                    </li>
                    <li>
                      <span>Processor: </span>
                      {game.minimum_system_requirements.processor}
                    </li>
                    <li>
                      <span>Memory: </span>
                      {game.minimum_system_requirements.memory}
                    </li>
                    <li>
                      <span>Graphics</span>
                      {game.minimum_system_requirements.graphics}
                    </li>
                    <li>
                      <span>Storage: </span>
                      {game.minimum_system_requirements.storage}
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="gameDes">
              <div className="divider"></div>
              <br />
              <br />
              {game.description}
            </div>
          </div>
        )}
      </div>
    );

    
}

export default GameDetails;
