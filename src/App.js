import React, {Component} from 'react'
import axios from 'axios'
import {Loading} from './Loading'

class App extends Component {
    constructor(props) {
        super(props)
        // creating state
        this.state = {
            users: [],
            loading: false
        }
    }

    getUsers() {
        this.setState({loading: true})
        axios('http://localhost:8080/').then(response => this.setState({users: response.data.posts, loading: false}))
    }

    componentWillMount() {
        this.getUsers()
    }

    render() {
        return <div className="App">
            {
            !this.state.loading ? this.state.users.map(user => (
                <div>
                    <h3>{user.title}</h3>
                </div>
            )) : <Loading message="Loading users"/>
        } </div>
    }
}

export default App;
