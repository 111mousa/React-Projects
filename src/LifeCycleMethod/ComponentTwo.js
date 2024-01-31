import React, { Component } from 'react'

class ComponentTwo extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      name : "Mousa"
    }
    console.log("Constructor Method From Component Two");
  };

  static getDerivedStateFromProps(props,state){
    console.log("getDrivedStateFromProps Method From Component Two")
    return null;
  }

  componentDidMount(){
    console.log("componentDidMount Method From Component Two");
  }

  shouldComponentUpdate(nextProps,nextState){
    console.log("shouldComponentUpdate Method  From Component Two");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps,prevState){
    console.log("getSnapshotBeforeUpdate Method  From Component Two");
    return null;
  }

  componentDidUpdate(){
    console.log("componentDidUpdate Method  From Component Two");
  }

  render() {
    console.log("render Method From Component Two");
    return (
      <div>
        ComponentTwo
      </div>
    )
  }
}

export default ComponentTwo
