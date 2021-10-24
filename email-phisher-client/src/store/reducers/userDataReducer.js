import { SET_USER_DATA } from "../actions/userDataAction";

export function userDataReducer(userData, action) {
    switch (action.type) {
        case SET_USER_DATA: {
            userData = action.userData;
            return userData;
        }
        default: {
            return userData
        }
    }
}