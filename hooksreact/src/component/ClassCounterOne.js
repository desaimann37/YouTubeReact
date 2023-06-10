import React, { Component } from 'react'

export class ClassCounterOne extends Component {

    constructor(props){
        super(props)
        this.state = {
            count: 0,
            name: '',
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
        if(prevState.count !== this.state.count){
            console.log('Updating Document title')
            document.title = `You Clicked : ${this.state.count} Times`
        }
    }
  render() {
    return (
      <div>
        <input type="text" value={this.state.name} onChange={(e)=> {
            this.setState({
                name : e.target.value
            })
        }}/>
        <button onClick={this.OnClickCounter}>Click : {this.state.count}</button>
      </div>
    )
  }
}

export default ClassCounterOne
