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

        // Binding Methods
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    getUsers() {
        this.setState({loading: true})
        axios('http://localhost:8080/').then(response => this.setState({users: [...this.state.users, ...response.data.posts], loading: false}))
    }

    handleSubmit(e) {
        e.preventDefault();
        this.getUsers();
    }

    componentWillMount() {
        this.getUsers()
    }

    render() {
        const {loading, users} = this.state;
        return <div className="App">
            <form onSubmit={
                this.handleSubmit
            }>
                <input type="submit" value="Refresh"/>
            </form>
            {
            !loading ? users.map(user => (
                <div key={user._id}>
                    <h3 style={{color:'grey'}}>{
                        user.title
                    }</h3>

                </div>
            )) : <Loading message="Loading users"/>
                }
         </div>
    }
}

export default App;
