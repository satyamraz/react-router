import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink} from "react-router-dom";
import home from './home';
import about from './about';

const User = ({match})=>{
return(<h1>WELCOME {match.params.username}</h1>);
}
class app extends Component {
    render() {
        return (
            <div>
              <h1>hellow</h1>
                <Router>
      <div>
        <nav>
          <ul>
            <li>
        <NavLink exact={true} to='/' activeStyle={{color:'green'}}>Home</NavLink>

            </li>
            <li>
              <NavLink  to='/about' activeStyle={{color:'green'}}>About</NavLink>
            </li>
            
            <li>
              <NavLink  to='/test'>About</NavLink>
            </li>
          </ul>
        </nav>

        <Route path="/"  exact component={home} />
        <Route path="/about/" component={about} />
        <Route path="/user/:username" component={User} />
        
        <Route path="/test" render={
          ()=>
            {
              return(<h1>hi it is test</h1>);
            }
           
          
        } />
        
      </div>
    </Router> 
            </div>
        );
    }
}

export default app;