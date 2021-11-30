import React, {useEffect} from 'react';
import GameProduct from './GameProduct';
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productActions";
import axios from 'axios';

const GameData = () => {
    
  const products = useSelector((state) => state);
  console.log(products);
  const dispatch = useDispatch();

    useEffect(() => {
      const fetchGames = async () => {
        const options = {
          method: "GET",
          url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
          headers: {
            "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
            "x-rapidapi-key":
              "0ca192bd34mshca25146e7ea1142p17a87ajsn20830dca802b",
          },
        };

        await axios
          .request(options)
          .then(function (response) {
              console.log("Data", response.data);
              dispatch(setProducts(response.data));
          })
          .catch(function (error) {
            console.error(error);
          });
      };

      fetchGames();
    }, []);

  return (
    <div>
      <div className="heading">
        <h2>All Games</h2>
      </div>
      <div className="dividerCat"></div>

      <div className="games">
        <GameProduct />
      </div>
    </div>
  );
}

export default GameData;
