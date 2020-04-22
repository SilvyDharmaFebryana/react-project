import Axios from "axios";
import { API_URL } from "../../constants/API";

export const usernameInputHandler = (text) => {
    return {
        type: "ON_CHANGE_USERNAME",
        payload: text,
    };
};

export const getUsernameHandler = (text) => {
    return {
        type: "GET_USER_LOGIN",
        payload: text,
    };
};


// dispatch berasal dr redux thunk , 
// jadi dispatch itu bisa langsung return 2x

export const loginHandler = (userData) => {
    return (dispatch) => {  
        const { username, password } = userData

        Axios.get(`${API_URL}/users`, {
            params: {
                username,
                password,
            },
        })  
        .then((res) => {
            if( res.data.length !== 0){
                dispatch({
                    type: "ON_LOGIN_SUCCESS",
                    payload: res.data[0]
                })
                alert('berhasil')
            } else {
                dispatch ({
                    type: "ON_LOGIN_FAILED",
                    payload: "Username atau password salah"
                })
                alert('mohon maaf gagal')
            }
            
        })
        .catch(err => {
            console.log(err);
        })
    };
};


export const registerHandler = (dataUser) => {
    return (dispatch) => {

        const { repPassword, password, username, users, firstName, lastName, role, fullName, isLoading } = dataUser

        Axios.get(`${API_URL}/users`, {
            params: {
                username: username,
            }
        })
            .then((res) => {
                if (res.data.length == 0) {
                    dispatch({
                        type: "ON_REGIS_SUCCESS",
                        payload: res.data
                    })
                        Axios.post(`${API_URL}/users`, {
                            username: username,
                            password: password,
                            repPassword: repPassword,
                            role: role,
                            firstname: firstName,
                            lastname: lastName,
                            fullname: firstName + ' ' + lastName,
                        })
                            .then((res) => {
                                Axios.get(`${API_URL}/users`, {
                                    params: {
                                        username,
                                        password,
                                    },
                                })
                                    .then((res) => {
                                        if (res.data.length !== 0) {
                                            dispatch({
                                                type: "ON_LOGIN_SUCCESS",
                                                payload: res.data[0]
                                            })
                                            
                                            // alert('Sukses menyimpan data dan masuk')
                                        } else {
                                            dispatch({
                                                type: "ON_LOGIN_FAILED",
                                                payload: "Username atau password salah"
                                            })
                                            alert('mohon maaf gagal')
                                        }
                                    })
                                    .catch(err => {
                                        console.log(err);
                                    })

                            })
                            .catch((err) => {
                                console.log(err)
                            })

                    this.setState({
                        username: "",
                        password: "",
                        repPassword: "",
                        role: "",
                        firstName: "",
                        lastName: "",
                    })
                    alert('Sukses menyimpan data dan masuk')
                    
                } else {
                    dispatch({
                        type: "ON_REGIS_FAILED",
                        payload: "username sudah ada"
                    })
                    alert('username sudah ada')
                    this.setState({ isLoading: false });
                }
            })
            .catch((err) => {
                console.log("ERROR", err);
            })
    }
}

