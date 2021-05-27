import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Resume from "./pages/Resume"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Portfolio from "./pages/Portfolio"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

function App() {
  return (
    <Router basename="/react-portfolio">
      <Navbar />
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/resume">
          <Resume />
        </Route>
        <Route exact path="/portfolio">
          <Portfolio />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      <Footer />
    </Router>
  )
}

export default App;
