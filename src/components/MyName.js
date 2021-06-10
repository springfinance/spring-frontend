import React, { Component } from 'react';

class MyName extends Component {
    render() {
        console.log(this.props);
        return(
            
            <span>{this.MyName}</span>
        )
    }
}

export default MyName;