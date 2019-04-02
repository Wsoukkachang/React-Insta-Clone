import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super();
        this.state = {

        }
    }

    handleChange = event => {
        this.setState({username: event.target.value})
      }

    login = event => {
        localStorage.setItem('username', [this.state.username])
    }

    render() {
        return (
            <Container>
                <Form onSubmit={this.login}>
                    <Input placeholder="Username" value={this.state.value} onChange={this.handleChange}/>
                    <Input placeholder="Password" />
                    <Button>Log In</Button>
                </Form>
            </Container>
        )
    }
}

export default Login;