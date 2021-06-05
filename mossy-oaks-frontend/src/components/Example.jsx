import React, { Component } from 'react';

class Example extends Component {
  
        constructor(props){
          super(props);
          this.state = {counter: 0}
        }

    render() {
        return (
            <p>{this.state.counter}</p>
        );
    }
}

export default Example;