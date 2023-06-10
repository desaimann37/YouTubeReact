import React, { Component } from 'react'

export class ClassCounterOne extends Component {

    constructor(props){
        super(props)
        this.state = {
            count: 0,
        }
        this.OnClickCounter = this.OnClickCounter.bind(this)
    }
    OnClickCounter = ()=>{
        this.setState({
            count : this.state.count+1,
        })
    }

    componentDidMount(){
        document.title = `You Clicked : ${this.state.count} Times`

    }
    componentDidUpdate(prevProps , prevState){
        document.title = `You Clicked : ${this.state.count} Times`
    }
  render() {
    return (
      <div>
        <button onClick={this.OnClickCounter}>Click : {this.state.count}</button>
      </div>
    )
  }
}

export default ClassCounterOne
