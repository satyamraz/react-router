import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink} from "react-router-dom";
import Topic from './Topic';

class about extends Component {
   
    render() {
        return (
            <div>
                <h1>it is about page</h1>
                <Router>
                <nav>
          <ul>
           
            <li>
              <NavLink  to={`/topics/php`} activeStyle={{color:'green'}}>php</NavLink>
            </li>
            <li>
              <NavLink  to={`/topics/laravel`}>laravel</NavLink>
            </li>
            </ul>
        </nav>
        <Route path={`/topics/:coursename`} component={Topic}/>
        </Router>
            </div>
            
        );
    }
}

export default about;