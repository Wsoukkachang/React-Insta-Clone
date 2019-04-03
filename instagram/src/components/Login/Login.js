import React, { Component } from 'react';
import './login.css';

class Login extends Component {
    constructor(props) {
        super();
        this.state = {

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
            alert("empty username")
        }
    }

    render() {
        return (
            <div>
                <form className="loginform" onSubmit={this.login}>
                    <input placeholder="Username" value={this.state.value} onChange={this.handleChange}/>
                    <input placeholder="Password" />
                    <button>Log In</button>
                </form>
            </div>
        )
    }
}

export default Login;