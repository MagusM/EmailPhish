import {SET_USER_TOKEN } from "../actions/userAction";

export function userTokenReducer(userToken, action) {
    switch (action.type) {
        case SET_USER_TOKEN: {
            userToken = action.userToken;
            return userToken;
        }
        default: {
            return userToken;
        }
    }
}