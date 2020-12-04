//user reducer that holds the state slice for the user part of the application

/*when an action gets fired for the first time, there won't be any "previous state" 
to pass into userReducer so we set up a default value to pass into it just so it can run for the first time.
This is exactly the same thing as when you set up state in your constuctor with this.state = {...etc}
So whatever you had in this.state just put in here.*/
const INITIAL_STATE = {
    currentUser: null
}

const userReducer = (prevState = INITIAL_STATE, action) => {

    switch (action.type) {
        case 'SET_CURRENT_USER':
            return {
                ...prevState,
                currentUser: action.payload
            }
        default:
            return prevState;
    }

}

export default userReducer;