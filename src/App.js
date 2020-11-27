import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import LoginRegisterContainerPage from './pages/login-register/login-register.component';
import { auth } from './firebase/firebase.utils';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    }//state
    console.log('constructor() called...');
  }//cons

  //have to close the open subscription to prevent memory leaks.
  //onAuthStateChanged accepts a callback that returns the user but it also if left unaltered, returns a function that unsubscribes from listening to changes in a user's auth state.
  //(this does NOT sign the user out. It just stops listening to auth changes. The next step would naturally be to perform a sign out function which is also seen below.)
  unsubscribeFromAuth = null;

  //using the onAuthStateChanged method to add an observer for state changes to a user's sign-in or sign-out status.
  //pass a function to this method with the parameter of 'user' which comes from the auth object which it got back from the firebase object. (FIREBASECLOUD>firebase>auth>)
  //User-authenticated session persistence is defaulted to "on" for firebase out the box.
  //The observer/subscriber is listening constantly to the auth object for changes. If there is no change/logout to the auth, then the onAuthStateChanged subscriber just sends back that "user" authenticated object everytime until they sig out.
  componentDidMount() {
    console.log('componentDidMount() called...');
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      console.log(user);//inspecting the "user" object returned by calling auth.onAuthStateChanged
      //It will not return anything if the user has manually logged out or the token expired. If however the last person logged in and did not log out. It will persist and THAT user object will be returned (they will still be logged in. Even if the page refreshes or the internet disconnects and reconnects.)
      this.setState(prevState => {
        return {
          currentUser: user
        }
      });//setState

    });//auth.onAuthStateChanged
  }

  componentWillUnmount() {
    console.log('componentWillUnmount() called...');
    this.unsubscribeFromAuth();
  }


  render() {
    console.log('render() called...');
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop/' component={ShopPage} />
          <Route path='/login-register' component={LoginRegisterContainerPage} />
        </Switch>

      </div>
    );
  }
}

export default App;
