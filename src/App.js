import React from "react"
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Jobs from "./components/Jobs";

function App() {

  return (
    <Router>

      <div className="mx-6">
        <Navbar />
        
        <main>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            
            <Route path="/jobs" >
              <Jobs />
            </Route>
          </Switch>
        </main>
      </div>
    
    </Router>
  );
}

export default App;
