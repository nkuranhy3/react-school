import React from 'react';
import Home from './Home';
import Login from './Login';
import Contact from './Contact';
import Register from './Register'
import New from './New'
import { Switch, Route } from 'react-router-dom';


const Main = () => (
    <div>
        <Switch>
            <Route exact path="/" component ={Home}/>
            <Route path="/login" component ={Login}/>
            <Route path="/contact" component ={Contact}/>
            <Route path="/register" component ={Register}/>
            <Route path="/new" component ={New}/>
        </Switch>
    </div>
)

export default Main;