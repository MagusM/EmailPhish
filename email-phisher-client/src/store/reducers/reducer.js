import { userDataReducer } from "./userDataReducer";

export const initialState = {
    userToken: '',
    userData: {}
}

export function reducer(state, action) {
    if (state === undefined) {
        state = initialState;
    }
    return {
        userToken: userTokenReducer(state.userToken, action),
        userData: userDataReducer(state.userData, action)
    }
}