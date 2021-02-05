import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
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
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
