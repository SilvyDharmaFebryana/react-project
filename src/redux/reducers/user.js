import Axios from 'axios'
import { API_URL } from "../../constants/API"

const init_state = {
    id: 0,
    username: "Welcome",
    fullname: "",
    role: "",
    testing: "",
    testing2: "",
};


export default (state = init_state, action) => {
    if (action.type == "ON_CHANGE_USERNAME") {
        return { ...state, username: action.payload }
    } else if (action.type == "GET_USER_LOGIN") {
        return { ...state, username: `Welcome ${action.payload}` } 
    } else if (action.type == "TESTING") {
        return { ...state, testing: action.payload }
    } else if (action.type == "TESTING2") {
        return { ...state, testing2: action.payload }
    } else {
        return { ...state }
    }
};