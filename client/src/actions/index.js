import { ACTION_TYPES } from '../common/actionTypes';

export const signIn = (userId) => {
    return {
        type: ACTION_TYPES.SIGN_IN,
        payload: userId
    }
};

export const signOut = () => {
    return {
        type: ACTION_TYPES.SIGN_OUT
    }
};