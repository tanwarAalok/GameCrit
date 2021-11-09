import React from 'react';
import Category from './Category';



const Game = () => {
    const shooter = "https://www.freetogame.com/g/3/thumbnail.jpg";
    const sports = "https://www.freetogame.com/g/209/thumbnail.jpg";
    const strategy = "https://www.freetogame.com/g/31/thumbnail.jpg";
    const openWorld = "https://www.freetogame.com/g/4/thumbnail.jpg";
    const superhero = "https://www.freetogame.com/g/260/thumbnail.jpg";
    const horror = "https://www.freetogame.com/g/55/thumbnail.jpg";
    return (
      <div>
        <div className="category">
          <div className="card">
            <Category image={shooter} name="Shooter" gameCat="shooter" />
            <Category image={sports} name="Sports" gameCat="sports" />
            <Category image={strategy} name="Strategy" gameCat="strategy" />
            <Category image={openWorld} name="Open World" gameCat="open-world" />
            <Category image={superhero} name="Superhero" gameCat="superhero" />
            <Category image={horror} name="Horror" gameCat="horror" />
          </div>
        </div>
      </div>
    );
}

export default Game;
