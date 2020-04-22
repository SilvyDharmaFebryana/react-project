import Axios from 'axios'
import { API_URL } from "../../constants/API"

const init_state = {
    id: 0,
    username: "",
    fullname: "",
    firstname: "",
    lastname: "",
    role: "",
    testing: "",
    testing2: "",
    errMsg: ""
};


export default (state = init_state, action) => {
    if (action.type == "ON_CHANGE_USERNAME") {
        return { ...state, username: action.payload }
    } else if (action.type == "GET_USER_LOGIN") {
        return { ...state, username: `Welcome ${action.payload}` } 
    } else if (action.type == "ON_LOGIN_SUCCESS") {
        const { username, fullname, role, id } = action.payload
        return { 
            ...state, 
            username, 
            fullname, 
            role, 
            id,
        };
    } else if (action.type == "ON_LOGIN_FAILED") {
        return { ...state, errMsg: action.payload } 
    } else if (action.type == "ON_REGIS_SUCCESS") {
        const { username, fullname, role, id, firstname, lastname } = action.payload
        return {
            ...state,
            username,
            firstname,
            lastname,
            fullname,
            role,
            id,
        };
    } else if (action.type == "ON_REGIS_FAILED") {
        return { ...state, errMsg: action.payload } 
    } else {
        return { ...state }
    }
};