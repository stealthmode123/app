import React, {useEffect, useState} from 'react';
import './App.css';
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <main className="form-signin">
                    <Route path="/" exact component={Home}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/signup" component={SignUp}/>
                </main>
            </BrowserRouter>
        </div>
    );
}

export default App;
