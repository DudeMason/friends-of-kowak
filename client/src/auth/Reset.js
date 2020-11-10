import React from 'react';
import {Consumer} from "../Provider";

const Reset = ({handleChange, email, sendReset}) => (
    <div align='center'>
        <h2>Password Reset</h2>
        <input
            autoFocus
            required
            name='email'
            value={email}
            placeholder='Email'
            onChange={handleChange}
        />
        <button onClick={sendReset}>Send Email</button>
    </div>
);

const ConnectedReset = () => (
    <Consumer>
        {value => <Reset handleChange={value.userHandleChange} email={value.aspiringUser.email}
                         sendReset={value.sendPasswordReset}/>}
    </Consumer>
);
export default ConnectedReset;