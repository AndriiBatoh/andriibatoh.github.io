import logo from './logo.svg';
import './App.css';
import Home from "./components/pages/Home";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

function App() {
  return (
      <Router>
        <div>
          <Switch>
            <Route path="/" exact render={props =>
                (<Home{...props}/>)}>
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
