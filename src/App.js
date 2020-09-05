import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Nomatch from './components/Nomatch/Nomatch';
import PostDetails from './components/PostDetails/PostDetails';
function App() {
    return (
        <Router>
            <Switch>
                <Route path="/home">
                    <Home/>
                </Route>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/posts/:postId">
                    <PostDetails/>
                </Route>
                <Route path="*">
                    <Nomatch/>
                </Route>
            </Switch>

        </Router>
    );
}

export default App;
