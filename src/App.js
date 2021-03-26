import React, {Component} from 'react'
import axios from 'axios'

class App extends Component{
  constructor(props){
    super(props)
    //creating state
    this.state = {
      users : []
    }
  }

  componentWillMount(){
    axios('http://localhost:8080/')
    .then(response => this.setState())
  }

  render(){
    return <div className="App">Hello</div>
  }
}

export default App;
