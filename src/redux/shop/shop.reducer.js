import collectionData from './collections-data';

const INITIAL_STATE = {
    collections: collectionData
};


const shopReducer = (prevState = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return prevState;
    };
};

export default shopReducer;