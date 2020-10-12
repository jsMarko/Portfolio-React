import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

// Import Components
import Nav from "./Nav";
import MarkoTitleContainer from "./MarkoTitleContainer";
import Hero from "./Hero";
import Projects from "./Projects";
import Skills from "./Skills";
import About from "./About";
import Contact from "./Contact";

function App() {
   return (
      <Router>
         <div className="app">
            <Nav />
            <MarkoTitleContainer />
            <Hero />
            <Switch>
               <Route exact path="/" component={Projects} />
               <Route path="/skills" component={Skills} />
               <Route path="/about" component={About} />
               <Route path="/contact" component={Contact} />
            </Switch>
         </div>
      </Router>
   );
}

export default App;
