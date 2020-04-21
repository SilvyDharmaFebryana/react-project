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

// export const passwordInputHandler = (text) => {
//     return {
//         type: "ON_CHANGE_PASSWORD",
//         payload: text,
//     };
// };





// export const usernameHandler = (text) => {
//     return {
//         type: "ON_USERNAME",
//         payload: text,
//     };
// };

