import React, { Component } from 'react';
class Counter extends Component {
    state = { value:this.props.value}
    styles = {
        fontSize: 20,
        fontWeight:"bold"

    };
    handleIncrement= () =>{
       // console.log(product.id);
         this.setState({value: this.state.value+1});
    }
    render() { 
        //console.log('props',this.props);
        return (
            <div>
                <h5> {this.props.id}</h5>
                <span style ={this.styles} className= {this.getBadgeClasses()}>{this.formatCount()} </span>
                <button onClick={()=>this.handleIncrement()} className="btn btn-secondary btn-sm">
                increment
                </button>
              
            </div>
        );
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.value === 0 ? 'warning' : 'primary';
        return classes;
    }

    formatCount(){
        const {value} = this.state
        return value === 0 ?'zero':value;
    }
}
 
export default Counter;
