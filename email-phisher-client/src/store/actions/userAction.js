
export const SET_USER_TOKEN = "SET_USER_TOKEN";

export function setUserToken(token) {
  return {
    type: SET_USER_TOKEN,
    token: token
  }
}

export const SET_USER_DATA = "SET_USER_DATA";

export function setUserData(user) {
  return {
    type: SET_USER_DATA,
    user: user
  }
}

export const SET_EMAILS_LIST = "SET_EMAILS_LIST"

export function setEmailsList(emailsList) {
  return {
    type: SET_EMAILS_LIST,
    emailsList: emailsList
  }
}

export function loginUser(user) {
    return (dispatch, getState) => {
        fetch('http://localhost:2000/login', {
            method: 'post',
            body: JSON.stringify({
                "email": user.email,
                "password": user.password
            }),
            headers: {
                'Content-Type': 'application/json'
            },
        }). then ((res) => res.json())
        .then((data) => {     
          dispatch(setUserToken(data.token))
          dispatch(setUserData(user))
      });
    };
}

export function logoutUser() {
  return (dispatch, getState) => {
    dispatch(setUserToken(null))
    dispatch(setUserData(null))
  }
}

export function getEmail(userEmail) {
  return (dispatch, getState) => {
    fetch(`http://localhost:2000/emails/${userEmail}`)
      .then((res) => res.json())
      .then((data) => {     
        dispatch(setEmailsList(data.emailsList))
    });
  };
}