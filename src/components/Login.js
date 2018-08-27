import React, { Component } from 'react'
import AuthService from './AuthService';
import './Login.css';

export default class Login extends Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.Auth = new AuthService();
    }

    componentWillMount(){
        if(this.Auth.loggedIn())
            this.props.history.replace('/');
    }
    handleFormSubmit(e) {
        e.preventDefault();
        this.Auth.login(this.state.email, this.state.password)
            .then( res => {
                this.props.history.replace('/');
            })
            .catch(err => {
                alert(err);
            })
    }
    render() {
        return (
            <div className="center">
                <div className="card">
                    <h1>Login</h1>
                    <form onSubmit={this.handleFormSubmit}>
                        <input type="text"
                         className="form-item"
                         placeholder="Username goes here..."
                         name="email"
                         onChange={this.handleChange}
                        />
                        <input type="password"
                         className="form-item"
                         placeholder="Password goes here..."
                         name="password"
                         onChange={this.handleChange}
                        />
                        <input type="submit"
                          value="Submit"
                          className="form-submit"
                        />

                    </form>
                </div>
            </div>
        )
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
}
