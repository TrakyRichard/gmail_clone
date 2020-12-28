import React from 'react';
import './Login.css';
import GmailIcon from '../../assets/gmail-logo.png'
import { Button } from '@material-ui/core';
import { auth, provider } from '../../firebase';
import { useDispatch } from 'react-redux';
import { login } from '../../features/userSlice';

function Login() {

    const dispatch = useDispatch();

    const signIn = () => {
        auth.signInWithPopup(provider).then(({ user }) => {
            dispatch(login({
                displayName: user.displayName,
                email: user.email,
                photoUrl: user.photoURL
            }))
        }).catch((err) => alert(err.message));
    }
    return (
        <div className="login">
            <div className="login__container">
                <img src={GmailIcon} alt="Gmail Icon" />
                <br />
                <Button variant="contained" color="primary" onClick={signIn}>Sign In</Button>
            </div>

        </div>
    )
}

export default Login
