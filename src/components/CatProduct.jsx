import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const CatProduct = () => {
  const games = useSelector((state) => state.catProducts.categories);
  const renderList = games.map((game) => {
    return (
      <div className="game" key={game.id}>
        <Link style={{ textDecoration: "none" }} to={`/game/${game.id}`}>
          <div className="image">
            <img src={game.thumbnail} alt="" />
          </div>
          <div className="title">
            <h2>{game.title}</h2>
          </div>
        </Link>
      </div>
    );
  });

  return <>{renderList}</>;
};

export default CatProduct;
