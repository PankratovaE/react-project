import React, { useState } from 'react';
import firebase from 'firebase';
import { Link } from 'react-router-dom';
import { TextField } from '@material-ui/core';

export default function Login (props) {
    const [ email, setEmail ] = useState('');
    const [ passw, setPassw ] = useState('');
    const [ err, setErr ] = useState('');

    const handleLoginSubmit = async (event) => {
        event.preventDefault();
        setErr('');
    
        try {
            await firebase.auth().signInWithEmailAndPassword(email, passw);
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

    const handleLogOut = async (event) => {
        event.preventDefault();
        try {
            await firebase.auth().signOut();
          } catch (err) {
            setErr(err.message);
          }
    }
    // const handleUserShow = () => {
    //     firebase.auth().onAuthStateChanged(user => {
    //         console.log({user})
    //     })
    // }

    return (
        <div className="App-header login-page">
            <form onSubmit={ handleLoginSubmit } className="form-block">
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
                <button type="submit" className="form__button">Login</button>
            </form>
            <button type="submit" className="form__button" onClick={handleLogOut}>Sign out</button>
            {/* <button type="submit" className="form__button" onClick={handleUserShow}>Show user</button> */}
            <p>No account?</p>
            <Link to="/signup"><p className="form__button login-link">Sign up!</p></Link>

        </div>
    )
}