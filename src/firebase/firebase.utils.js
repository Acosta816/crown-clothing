import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAy5J9YVi6VpIeAgxJScsSGQEQyg3zJKHM",
    authDomain: "crown-db-eb89f.firebaseapp.com",
    databaseURL: "https://crown-db-eb89f.firebaseio.com",
    projectId: "crown-db-eb89f",
    storageBucket: "crown-db-eb89f.appspot.com",
    messagingSenderId: "265380521808",
    appId: "1:265380521808:web:1135a462cdc09a62e66e55",
    measurementId: "G-SVHP6QVWEL"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


//Setting up our Google authentication utility:

//creating a Goofle authprovider instance from the 'auth' library we imported. 
//it takes a couple of custom OAuth parameters that we can assign using provider.setCustomParameter() and passing in an object with key:value pairs 
const myGoogleProvider = new firebase.auth.GoogleAuthProvider();
myGoogleProvider.setCustomParameters({ prompt: 'select_account' }); //this custom OAuth provider ensures a "Select account" feature that prompts the user to sign in whenever they reach a part of our React app that uses the myGoogleProvider. 
//We still need to setup the "signInWithPopup" feature which triggers a popup and by adding this provider to it, it will ensure that this provider gets used with a 'select account' prompt feature.

//We are creating a const that will equal the method from the auth library called signInWithPopup() which accepts provider objects from twitter, google, amazon, facebook, etc..
//We want the popup from google so we will pass in the provider we made called myGoogleProvider
export const signInWithGoogle = () => auth.signInWithPopup(myGoogleProvider);
//you still need to configure your firebase project on firebase site to use "Google sign in"

export default firebase; //in case we need to access other methods on firebase/app.