import React, { Component, Fragment } from 'react'
import { BrowserRouter,Link,NavLink,Route,Switch} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Users from './Components/Users'
import Search from './Components/Search'
import Alert from './Components/Alert'
import About from './Components/About'
import axios from 'axios'
import UserDetails from './Components/UserDetails'

export class App extends Component {
    constructor(props) {
        super(props);
        this.searchUsers = this.searchUsers.bind(this);
        this.clearUsers = this.clearUsers.bind(this);
        this.setAlert = this.setAlert.bind(this);
        this.getUser = this.getUser.bind(this);
        this.getUserRepository = this.getUserRepository.bind(this);
        this.state = {
            loading: false,
            users: [],
            user:{},
            repos:[],
            alert: null
        }
    }

    searchUsers(keyword) {
        this.setState({loading: true});
        setTimeout(() => {
            axios
                .get(`https://api.github.com/search/users?q=${keyword}`)
                .then(res => this.setState({users: res.data.items, loading: false}));
        }, 1000);
        
    }
   

    getUser(username)
    {
        this.setState({loading:true});
            axios
                .get(`https://api.github.com/users/${username}`)
                .then(res => this.setState({user: res.data, loading: false}));
    }

    getUserRepository(username)
    {
        this.setState({loading:true});
            axios
                .get(`https://api.github.com/users/${username}/repos`)
                .then(res => this.setState({repos: res.data, loading: false}));
    }

    clearUsers() {
        this.setState({users: [] });
    }

    setAlert(msg, type) {
        this.setState({ alert: {msg,type} });

        setTimeout(() => {
            this.setState({ alert: null });
        }, 3000);
    }

    render() {
        return (
            <BrowserRouter>
                <Navbar />
                <Alert alert= {this.state.alert}/>
                <Switch>
                        <Route exact path="/" render={ props=> (
                                <>
                                    <Search 
                                        searchUsers={this.searchUsers} 
                                        clearUsers={this.clearUsers} 
                                        showClearButton = {this.state.users.length > 0? true:false}
                                        setAlert={this.setAlert}
                                        />
                                    <Users users={this.state.users} loading={this.state.loading}/>
                                </>
                            )
                        } />
                        <Route path="/about" component={About} />
                        <Route path="/user/:login" render = {
                            props => (
                                <UserDetails getUser = {this.getUser} {...props} user = {this.state.user} getUserRepository={this.getUserRepository} repos = {this.state.repos}  />
                            )
                        } />
                 
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App
