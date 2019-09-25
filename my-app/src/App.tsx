import React from 'react';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import { Route, Switch } from "react-router-dom";
import Home from "./Home"
import Report from "./Report"

const App: React.FC = () => {
  return (
    <div>
        <Header />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/report" component={Report}/>
        </Switch>

        <Footer />
      </div>
  );
}

export default App;
