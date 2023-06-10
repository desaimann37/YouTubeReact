import React, { Component } from 'react'

export class ClassMouse extends Component {

    constructor(props){
        super(props)

        this.state = {
            x: 0,
            y: 0,
        }
    }
    logMouseposition = (e) => {
        this.setState({
            x: e.x, 
            y: e.y,
        })
    }
    componentDidMount(){
        window.addEventListener('mousemove' , this.logMouseposition)
    }
  render() {
    return (
      <div>
        X - {this.state.x} Y - {this.state.y}
      </div>
    )
  }
}

export default ClassMouse
