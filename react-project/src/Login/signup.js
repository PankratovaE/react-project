import React, { useState } from 'react';
import firebase from 'firebase';
import { TextField } from '@material-ui/core';



export default function Signup (props) {
    const [ email, setEmail ] = useState('');
    const [ passw, setPassw ] = useState('');
    const [ err, setErr ] = useState('');

    const handleSignupSubmit = async (event) => {
        event.preventDefault();
        setErr('');

        try {
            await firebase.auth().createUserWithEmailAndPassword(email, passw);
          } catch (err) {
            setErr(err.message);
          }
    };
      
    

    const handleEmail = (event) => {
        setEmail(event.target.value)
    }

    const handlePassword = (event) => {
        setPassw(event.target.value)
    }

    return (
        <div className="App-header">
            <form onSubmit={ handleSignupSubmit } className="form-block">
                {err && <p>{err}</p>}
                <TextField 
                    autoFocus
                    required
                    label="Email"
                    type="email"
                    value={ email }
                    onChange={ handleEmail }/>
                <TextField
                    required
                    label="Password"
                    type="password"
                    value={ passw }
                    onChange={ handlePassword }/>
                <button type="submit" className="form__button">Sign up</button>
            </form>
        </div>
    )
}