// import logo from "./logo.svg";
import "./App.css";
import Homepage from "./pages/Home/HomePage";
import About from "./components/About/About";
import AboutAuthor from "./components/About/AboutAuthor";
import AboutApp from "./components/About/AboutApp";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/about" exact component={About} />
          <Route path="/about-app" exact component={AboutApp} />
          <Route path="/about-author" exact component={AboutAuthor} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
