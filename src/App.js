
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './components/navbar';
import Game from './components/game';
import about from './components/about';
import Home from './components/home';
import GameData from './components/gameData';
import Footer from './components/Footer';
import GameDetails from './components/GameDetails';
import GameCat from './components/GameCat';



function App() {

  return (
    <div className="app">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" exact component={Home} />
          <Route exact path="/games" exact component={Game} />
          <Route exact path="/games/:gameCat" exact component={GameCat} />
          <Route exact path="/explore" exact component={GameData} />
          <Route exact path="/game/:gameId" exact component={GameDetails} />
          <Route exact path="/about" exact component={about} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
