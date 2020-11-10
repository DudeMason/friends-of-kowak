import React from 'react';
import {Consumer} from "../Provider";
import {Link} from "react-router-dom";

class Login extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const {handleLogin, history} = this.props;
        handleLogin(history);
    }

    render() {
        const {handleChange, aspiringUser: {email, password}} = this.props

        return (
            <div align='center'>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit} style={{width: '90%'}}>
                    <input
                        autoFocus
                        required
                        name='email'
                        value={email}
                        placeholder='Email'
                        onChange={handleChange}
                    />
                    <input
                        required
                        name='password'
                        value={password}
                        placeholder='Password'
                        type='password'
                        onChange={handleChange}
                    />
                    <button type='submit'>Submit</button>
                </form>
                <br/>
                Don't have an account? <Link to={'/register'}>Register here</Link>
                <br/>
                <br/>
                Forgot your password?
                <br/>
                <Link to={'/reset'}>Reset it</Link>
            </div>
        );
    }
}

const ConnectedLogin = (props) => (
    <Consumer>
        {value => <Login history={props.history} handleLogin={value.handleLogin} aspiringUser={value.aspiringUser}
                         handleChange={value.userHandleChange}/>}
    </Consumer>
);
export default ConnectedLogin;
