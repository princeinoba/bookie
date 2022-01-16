import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { BookProvider } from "./utils/BookContext";
import MainNav from "./components/MainNav";
import Search from "./pages/Search";
import Recommended from "./pages/Recommended";

function App() {
  return (
    <BookProvider>
      <Router>
        <MainNav />
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/recommended" component={Recommended} />
        </Switch>
      </Router>
    </BookProvider>
  );
}

export default App;
