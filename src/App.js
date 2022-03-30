import "./App.css";
import SideTab from "./components/sideTab";
import MainTab from "./components/mainTab";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddScreen from "./components/addScreen/addScreen";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/add">
            <AddScreen />
          </Route>
          <Route path="/" exact>
            <MainTab className="mainTab" />
          </Route>
        </Switch>

        <SideTab />
      </Router>
    </div>
  );
}

export default App;
