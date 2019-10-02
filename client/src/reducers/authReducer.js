import { ACTION_TYPES } from '../common/actionTypes';

const INITIAL_STATE = {
    isSignedIn: null,
    userId: null
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ACTION_TYPES.SIGN_IN:
            return { ...state, isSignedIn: true, userId: action.payload };
        case ACTION_TYPES.SIGN_OUT:
            return { ...state, isSignedIn: false, userId: null };
        default:
            return state;
    }
};