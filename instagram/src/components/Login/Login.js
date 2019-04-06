import React, { Component } from 'react';
import {Container, Form, Input, Button, H1} from '../../../src/StyledComponents';

class Login extends Component {
    constructor(props) {
        super();
        this.state = {
            username: null
        }
    }

    handleChange = e => {
        this.setState({username: e.target.value})
      }

    login = e => {
        if (this.state.username !== null) {
            localStorage.setItem('username', [this.state.username])
        }
        else {
            alert("Please enter username")
        }
    }

    render() {
        return (
            <div>
                <form className="loginform" onSubmit={this.login}>
                    <H1>Instagram</H1>
                    <input placeholder="Username" value={this.state.value} onChange={this.handleChange}/>
                    <input placeholder="Password" />
                    <Button primary expand color="primary">Log In</Button>
                </form>
            </div>
        )
    }
}

export default Login;