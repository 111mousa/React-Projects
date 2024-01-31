import React, { Component } from 'react'

const WithCounter = (WrappedComponent,incrementValue) => {
    return class WithCounter extends Component {
        constructor(props){
            super(props);
            this.state = {
                count:0
            }
        }
    
        handleIncrement = ()=>{
            this.setState((preState)=>{
                return {count : preState.count + incrementValue}
            })
        }
    
        render() {
            return (
                <WrappedComponent count={this.state.count} handleIncrement={this.handleIncrement}/>
            )
        }
    }

}

export default WithCounter
