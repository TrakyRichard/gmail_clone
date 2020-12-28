import React, { useEffect } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Mail from './Components/Mail/Mail';
import MailList from './Components/MailList/MailList';
import SendMail from './Components/SendMail/SendMail';
import { useDispatch, useSelector } from 'react-redux';
import { selectMail } from './features/mailSlice';
import { login, selectUser } from './features/userSlice';
import Login from './Components/Login/Login';
import { auth } from './firebase';

function App() {

  const sendMessageOpen = useSelector(selectMail);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();



  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        // the user is logged in
        dispatch(login({
          displayName: user.displayName,
          email: user.email,
          photoUrl: user.photoURL
        }))

      }
    })
  }, [])
  return (
    <Router>
      {
        !user ? <Login /> :
          <div className="app">
            <Header />
            <div className="app__body">
              <Sidebar />
              <Switch>
                <Route path="/mail">
                  <Mail />
                </Route>
                <Route path="/">
                  <MailList />
                </Route>
              </Switch>
            </div>
          </div>
      }
      {sendMessageOpen && <SendMail />}

    </Router>
  );
}

export default App;
