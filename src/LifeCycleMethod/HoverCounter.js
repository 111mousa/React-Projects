import React, { Component } from 'react'
import WithCounter from './WithCounter';

class HoverCounter extends Component {
    
    render() {
        const {count,handleIncrement} = this.props;
        return (
            <div>
                <button onMouseOver={handleIncrement}>Clicked {count} Times</button>
            </div>
        )
    }
}

export default WithCounter(HoverCounter,8)
