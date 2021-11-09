import React from 'react';
import { Link } from "react-router-dom";


const Category = ({image, name, gameCat}) => {
    return (
      <div>
        <Link style={{ textDecoration: "none" }} to={`/games/${gameCat}`}>
        <div className="game">
          <div className="image">
            <img
              src={image}
              alt=""
            />
          </div>
          <div className="title">
            <h2>{name}</h2>
          </div>
        </div>
        </Link>
      </div>
    );
}

export default Category;
