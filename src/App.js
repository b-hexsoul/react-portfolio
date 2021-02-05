import "./App.scss";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Skills from "./pages/Skills";
import Nav from "./components/nav/nav.component";

function App() {
  return (
    <div>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/work">
          <Work />
        </Route>
        <Route exact path="/skills">
          <Skills />
        </Route>
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
