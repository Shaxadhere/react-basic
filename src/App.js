import React, {Component} from 'react'
import axios from 'axios'

class App extends Component {
    constructor(props) {
        super(props)
        // creating state
        this.state = {
            users: [],
            loading: false
        }
    }

    getUsers(){
      this.setState()
      axios('http://localhost:8080/').then(response => this.setState({users: response.data.posts}))
    }

    componentWillMount() {
      this.getUsers()
    }

    render() {
        return <div className="App">
            {
            this.state.users.map(user => <div>{
                user.title
            }</div>)
        } </div>
    }
}

export default App;
