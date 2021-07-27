import React from 'react';
import TextField from '@material-ui/core/TextField';
import { changeAge, changeName, changeShowName } from '../Store/Action/profile';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';


const Profile = (props) => {

    const [ profileName, setProfileName ] = React.useState('');
    const [ profileAge, setProfileAge ] = React.useState('');


    const dispatch = useDispatch()
    let { name, age, showName } = useSelector(state => state.profile)
    useEffect (() => {
        setProfileName(name)
        setProfileAge(age)
    }, [])

    const handleNameSubmit = (event) => {
        event.preventDefault()
        dispatch(changeName(profileName))
        dispatch(changeAge(profileAge))
    }
    

    const handleProfileName = (event) => {
        setProfileName(event.target.value)
    }
    const handleProfileAge = (event) => {
        setProfileAge(event.target.value)
    }
    const handleShowName = () => {
        dispatch(changeShowName(showName))
    }

    return (
        <div className="App-home">
            Profile page
            <div>
                <p>Hello, { name }. Are you { age } years old?</p>
                <p>If uncorrect, fix it!</p>
            </div>
            <p>Your name:</p>
            <form onSubmit={ handleNameSubmit }>
                <TextField
                    autoFocus
                    required
                    label="Name"
                    value={ profileName }
                    onChange={ handleProfileName }
                />
                <p>Your age:</p>
                <TextField
                    autoFocus
                    required
                    label="Age"
                    value={ profileAge}
                    onChange={ handleProfileAge }
                />
                <div><button type="submit"  className="form__button">Send</button></div>
            </form>
            <div>
                <input
                    type="checkbox"
                    checked={ showName }
                    value={ showName }
                    onChange={ handleShowName }
                />
                <span>{ showName ? <span>Hide me!</span> : <span>Show name</span> }</span>
                { showName ? <p>{ name }</p> : <p>Gues who?</p> }
            </div>
        </div>
    )
}

export default Profile;