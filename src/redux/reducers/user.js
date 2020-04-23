import Axios from 'axios'
import { API_URL } from "../../constants/API"

const init_state = {
    id: 0,
    username: "",
    fullname: "",
    firstname: "",
    lastname: "",
    repPassword: "",
    role: "",
    testing: "",
    testing2: "",
    errMsg: "",
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
        const { username, fullname, role, id, firstname, lastname, repPassword } = action.payload
        return {
            ...state,
            username,
            firstname,
            lastname,
            fullname,
            repPassword,
            role,
            id,
        };
    } else if (action.type == "ON_REGIS_FAILED") {
        return { ...state, errMsg: action.payload } 
    } else if (action.type == "ON_LOGOUT"){
        const { username, fullname, role, id } = action.payload
        return {
            ...state,
            username,
            fullname,
            role,
            id,
        };
    } else {
        return { ...state }
    }
};