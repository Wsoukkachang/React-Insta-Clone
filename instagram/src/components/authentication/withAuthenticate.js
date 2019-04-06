import React from 'react';
import Login from '../Login/Login'

const withAuthentication = PostsPage => LoginPage => {

    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                loggedIn: false
            }
        }

        componentDidMount() {
            if (localStorage.getItem("username") !== null) {
                this.setState({loggedIn: true})
            }
        }

        render() {
            return (
                <div>
                    {this.state.loggedIn === true ? <PostsPage /> : <LoginPage />}
                </div>
            )
        }
    }
}

export default withAuthentication;