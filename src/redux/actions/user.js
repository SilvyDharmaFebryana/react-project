import Axios from "axios";
import { API_URL } from "../../constants/API";
import swal from 'sweetalert'
import React, { Component } from "react";
import user from "../reducers/user";

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
                swal("", "Berhasil masuk", "success");
            } else {
                dispatch ({
                    type: "ON_LOGIN_FAILED",
                    payload: "Username atau password salah"
                })
                swal("", "Username atau password salah", "error");
            }
            
        })
        .catch(err => {
            console.log(err);
        })
    };
};


export const registerHandler = (dataUser) => {
    return (dispatch) => {

        const { repPassword, password, username, firstname, lastname, role } = dataUser

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
                    if ( repPassword == password ){
                        Axios.post(`${API_URL}/users`, {
                            username: username,
                            password: password,
                            repPassword: repPassword,
                            role: role,
                            firstname: firstname,
                            lastname: lastname,
                            fullname: firstname + ' ' + lastname,
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
                                            swal('', 'Sukses menyimpan data dan masuk', 'success')
                                        } else {
                                            dispatch({
                                                type: "ON_LOGIN_FAILED",
                                                payload: "Username atau password salah"
                                            })
                                            swal('', 'mohon maaf gagal', 'error')
                                        }
                                    })
                                    .catch(err => {
                                        console.log(err);
                                    })
                            })
                            .catch((err) => {
                                console.log(err)
                            })
                    } else {
                        swal('', 'password tidak sama', 'error')
                    }
                } else {
                    dispatch({
                        type: "ON_REGIS_FAILED",
                        payload: "username sudah ada"
                    })
                    swal('', `username ${username} sudah terpakai`, 'error')
                }
            })
            .catch((err) => {
                console.log("ERROR", err);
            })
    }
};


export const userKeepLogin = (userData) => {
    return (dispatch) => {
        console.log(userData)
        Axios.get(`${API_URL}/users`, {
            params : {
                id: userData.id
            }
        })
        .then ((res) => {
            console.log(res);
            if (res.data.length !== 0) {
                dispatch({
                    type: "ON_LOGIN_SUCCESS",
                    payload: res.data[0]
                })
                // swal("", "Berhasil masuk", "success");
            } else {
                dispatch({
                    type: "ON_LOGIN_FAILED",
                    payload: "Username atau password salah"
                })
                swal("", "Username atau password salah", "error");
            }
            
        })
        .catch((err) => {
            console.log(err);    
        })
    }
}


export const logoutHandler = () => {
    return {
        type: "ON_LOGOUT",
        payload: "", //payload itu untuk mebgirim data ke reduce
    }
}

