import React, { Component, useState } from "react";
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import NotMatch from "./NotMatch";
import '../styles/App.css';
import Navli from "./Navli";

class App extends Component {
    render() {

        return (
            <>
                <BrowserRouter>
                    <div id="main">
                        <Navli />
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/about" component={About} />
                            <Route exact path="/*" component={NotMatch} />
                        </Switch>
                    </div>
                </BrowserRouter>
            </>
        )
    }
}


export default App;
