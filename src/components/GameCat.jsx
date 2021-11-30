import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCategory } from "../redux/actions/productActions";
import axios from 'axios';
import CatProduct from './CatProduct';
import { useParams } from 'react-router-dom';

const GameCat = () => {
    const { gameCat } = useParams();

    const catgames = useSelector(state => state);
    console.log(catgames);
    const dispatch = useDispatch();

    useEffect(() => {
      const fetchGames = async () => {
        const options = {
          method: "GET",
          url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
          params: { category: gameCat },
          headers: {
            "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
            "x-rapidapi-key":
              "0ca192bd34mshca25146e7ea1142p17a87ajsn20830dca802b",
          },
        };

        await axios
          .request(options)
          .then(function (response) {
            console.log("CatData: ", response.data);
            dispatch(selectCategory(response.data));
          })
          .catch(function (error) {
            console.error(error);
          });
      };

      fetchGames();
    }, [gameCat]);

    return (
      <div>
        <div className="heading">
          <h2 style={{textTransform: "capitalize"}}>{gameCat} Games</h2>
        </div>
        <div className="dividerCat"></div>

        <div className="games">
          <CatProduct />
        </div>
      </div>
    );
}

export default GameCat;
