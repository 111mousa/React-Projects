import React, { Component } from 'react'
import WithCounter from './WithCounter'

export class ClickCounter extends Component {
    
    render() {
        const {count,handleIncrement} = this.props;
        return (
            <div>
                <button onClick={handleIncrement}>Clicked {count} Times</button>
            </div>
        )
    }
}

export default WithCounter(ClickCounter,4)
