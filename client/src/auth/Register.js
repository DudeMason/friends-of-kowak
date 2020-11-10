import React from 'react';
import {Consumer} from "../Provider";
import {Link} from "react-router-dom";

class Register extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const {handleRegister, history} = this.props;
        handleRegister(history);
    }

    render() {
        const {handleChange, aspiringUser: {email, password, passwordConfirmation}} = this.props;

        return (
            <div align='center'>
                <h1>Register</h1>
                <form onSubmit={this.handleSubmit}>
                    <input
                        required
                        autoFocus
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
                    <input
                        required
                        name='passwordConfirmation'
                        value={passwordConfirmation}
                        placeholder='Confirmation'
                        type='password'
                        onChange={handleChange}
                    />
                    <button type='submit'>Submit</button>
                </form>
                <br/>
                Already have an account?
                <br/>
                <Link to={'/login'}>Login here</Link>
            </div>
        );
    }
}

const ConnectedRegister = (props) => (
    <Consumer>
        {value => <Register history={props.history} handleRegister={value.handleRegister}
                            aspiringUser={value.aspiringUser} handleChange={value.userHandleChange}/>}
    </Consumer>
);
export default ConnectedRegister;
