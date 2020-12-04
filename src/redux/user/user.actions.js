
const SET_CURRENT_USER = 'SET_CURRENT_USER';

//make an action that will trigger the case 'SET_CURRENT_USER' in the switch statement inside the userReducer function.
//To do this we will create a factory function that pumps out actions with type: 'SET_CURRENT_USER' and payload: of whatever user
//is passed into it.
//Takes user parameter which is userAuth/userSnapshot that we make in firebase.utils.js or it's null if user is not autenticated yet or logged out.
//Instead of calling this.setState inside App.js > componentDidMount() > we will fire off the action that returns from this action creator, passing it 
//to the userReducer which will match it to the 'SET_CURRENT_USER' case and change the 'currentUser' to this action's action.payload
export const setCurrentUser = user => (
    {
        type: SET_CURRENT_USER,
        payload: user
    }
);

//you can think of this as a utility function that creates an action when we need it.