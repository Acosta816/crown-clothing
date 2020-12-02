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
};

//exporting an async function that takes the userAuth object returned by logging in with google. Then we make an async call to google api.
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    //if there is a userAuth, query firestore to see if it exists
    //NOTE: When you query firestore, it returns 2 different tyrpes of objects from a query, a "QueryReference" and a "QuerySnapshot"
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();//have to call .get() on the document object reference we get back in order to perform a read CRUD method on it which is .get()

    //This checks if the document already exits by checking the snapshot's .exists property
    //If it doesn't already exist, call the .set() CRUD operation on the userRef object to write a new document to the database.
    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (err) {
            console.log('error creating user', err.message);
        }
    };//end of creating user

    return userRef;
};

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