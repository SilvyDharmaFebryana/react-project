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

export const loginHandler = () => {
    return (dispatch) => {  
        dispatch({
            type: "TESTING",
            payload: "Hello World"
        })

        dispatch({
            type: "TESTING2",
            payload: "Hello hello dunia"
        })
    };
};
