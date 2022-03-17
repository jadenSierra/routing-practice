import {
  Switch,
  BrowserRouter,
  Route} from "react-router-dom"
import './App.css';
import Home from "./components/Home";
import React from "react";
import Number from "./components/Number";
import Word from "./components/Word";
import WordBg from "./components/WordBg";


function App() {


  return (
    <BrowserRouter>
      <div className="App">
        <Switch>

          <Route exact path="/home" >
            <Home />
          </Route>

          <Route exact path={["/:param","/:param/:txtColor","/:param/:txtColor/:bgColor"]}>
            <WordBg />
          </Route>

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
