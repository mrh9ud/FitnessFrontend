import { VERIFY_USER_DATA } from './actionType'

const userLoginUrl = 'http://localhost:3000/api/v1/login'

function verifyUserData(userObj) {
    return dispatch => {
        const userConfigObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(userObj)
        }
        dispatch(loading())    // need to review docs to get this line fully functioning
        fetch(userLoginUrl, userConfigObj).then(resp => resp.json())
            .then(data => console.log(data))  //should call a method to set current user and store credentials
            .catch(error => console.log(error.message))
    }
}

export { verifyUserData }