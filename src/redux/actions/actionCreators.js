import { LOADING, LOGIN } from './actionType'

const userLoginUrl = "http://10.0.0.68:3000/api/v1/login"

function loading() { return { type: LOADING } }

function loginUser(data) { return { type: LOGIN, payload: data } }

function verifyUserData(userObj) {
    return dispatch => {
        const userConfigObj = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": 'application/json'
            },
            body: JSON.stringify(userObj)
        }
        dispatch(loading())
        fetch(userLoginUrl, userConfigObj).then(res => res.json())
        .then(data => dispatch(loginUser(data)))
        .catch(error => console.log(error.message))
    }
}

export { verifyUserData }