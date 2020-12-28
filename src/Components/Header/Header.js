import React from 'react';
import './Header.css';
import { Apps, ArrowDropDown, Menu, Notifications, Search } from "@material-ui/icons"
import { Avatar, IconButton } from '@material-ui/core';
import GmailIcon from '../../assets/gmail-logo.png'
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../../features/userSlice';
import { auth } from '../../firebase';
import { useHistory } from 'react-router';

function Header() {

    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const history = useHistory();

    const signOut = () => {
        auth.signOut().then(() => {
            dispatch(logout());
            history.replace('/');
        })
    }
    return (
        <div className="header">
            <div className="header__left">
                <IconButton>
                    <Menu />
                </IconButton>
                <img src={GmailIcon} alt="youtube Logo" />
            </div>

            <div className="header_middle">
                <Search />
                <input type="text" placeholder="Search mail" />
                <ArrowDropDown className="header_inputCaret" />
            </div>

            <div className="header_right">
                <Apps />
                <Notifications />
                <Avatar style={{ cursor: "pointer" }} onClick={signOut} src={user?.photoUrl} />
            </div>
        </div>
    )
}

export default Header
