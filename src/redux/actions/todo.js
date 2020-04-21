export const todoInputHandler = (text) => {
    return {
        type: "ON_CHANGE_TODO_INPUT",
        payload: text,
    };
};

// payload adalah = value yg akan di kirim 

export const todoListHandler = (todoItem) => {
    return {
        type: "ADD_TODO_LIST",
        payload: todoItem,
    };
};