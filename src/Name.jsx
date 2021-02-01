import React, { Component } from 'react';

class Name extends Component {
    render() {
        return (
            <div className="name" >
                {this.props.name}
            </div>
        )
    }
}

export default Name