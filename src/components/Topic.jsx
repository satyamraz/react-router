import React, { Component } from 'react';

class Topics extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }
    
    render() {
        return (
            <div>
                <h1>WELCOME{this.props.match.params.coursename} </h1>
           </div>
        );
    }
}

export default Topics;