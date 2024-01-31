import React, { Component } from 'react'
import ComponentTwo from './ComponentTwo';

class ComponentOne extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      name : "Mousa"
    }
    console.log("Constructor Method From Component One");
  };

  static getDerivedStateFromProps(props,state){
    console.log("getDrivedStateFromProps Method  From Component One")
    return null;
  }

  componentDidMount(){
    console.log("componentDidMount Method  From Component One");
  }

  shouldComponentUpdate(nextProps,nextState){
    console.log("shouldComponentUpdate Method  From Component One");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps,prevState){
    console.log("getSnapshotBeforeUpdate Method  From Component One");
    return null;
  }

  componentDidUpdate(){
    console.log("componentDidUpdate Method  From Component One");
  }

  changeState = ()=>{
    this.setState({
        name:"Kareem"
    })
  }
  render() {
    console.log("render Method  From Component One");
    return (
      <div>
        ComponentOne
        <button onClick={this.changeState}>Change State</button>
        <ComponentTwo/>
      </div>
    )
  }
}

export default ComponentOne
