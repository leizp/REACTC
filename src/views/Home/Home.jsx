import React, { Component} from 'react'
import './Home.scss'

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {date: new Date()}
  }

  render () {
    return (
      <div className='home'>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    )
  }
}

export default Home
