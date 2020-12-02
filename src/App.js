import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import LoginRegisterContainerPage from './pages/login-register/login-register.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

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
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      console.log(userAuth);//inspecting the "userAuth" object returned by calling auth.onAuthStateChanged
      //It will not return anything if the user has manually logged out or the token expired. If however the last person logged in and did not log out. It will persist and THAT user object will be returned (they will still be logged in. Even if the page refreshes or the internet disconnects and reconnects.)

      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        //Subscribing to the userRef for any future changes, this also returns the snapShot of the userRef which we can call .data() on to see the actual user doc data like email, displayName, etc...
        userRef.onSnapshot(snapShot => {
          console.log(snapShot.data());//have to call .data() in order to retrieve the actual document object's data like email, displayName, etc..

          this.setState(prevState => {
            return {
              currentUser: {
                id: snapShot.id,
                ...snapShot.data()
              }
            }
          },
            () => console.log(this.state)//this is a 2nd argument you can pass to setState where you can invoke a console log to see the new state.
          );//setState

        }); //end of userRef.onSnapshot()

      } else {
        this.setState({ currentUser: userAuth }); //if no userAuth (meaning the userAuth came back null because they logged out) then we set the state to the null that is returned by userAuth.
      }


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
