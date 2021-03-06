import React from "react";
import { connect } from "react-redux";
import { todoInputHandler, usernameInputHandler, todoListHandler, loginHandler } from "../../redux/actions";
import user from "../../redux/reducers/user";

class TodoReduxScreen extends React.Component {



    render() {
        return (
            <div className="p-5">
                <h1>Todo Screen</h1>
                {/* <h2>{this.props.todo.todoInput}</h2>
                <h3>{this.props.user.username}</h3> */}
                {/* <input
                    type="text"
                    className="form-control"
                    placeholder="Input Todo Item"
                    onChange={(e) => this.props.onChangeTodo(e.target.value)}
                />
                <input 
                    className="btn btn-primary" 
                    type="button" 
                    value="Add todo"
                    onClick={() => this.props.onAddTodoList(this.props.todo.todoInput)}
                />
                
                    {this.props.todo.todoList.map((val) => {
                        return <p>{val}</p>
                    })}
            
                <input
                    type="text"
                    className="form-control"
                    placeholder="Input Username"
                    onChange={(e) => this.props.onChangeUsername(e.target.value)}
                /> */}

                <p>Testing 1 : {this.props.user.testing} </p>
                <p>Testing 2 : {this.props.user.testing2} </p>
                <input 
                    type="button" 
                    value="Testing 1" 
                    className="btn btn-success"
                    onClick={this.props.onLoginHandler} />
            </div>
        );
    }
}


// connect reducer agar bisa di akses lewat component lewat props
const mapStateToProps = (state) => {
    return { 
        todo: state.todo,
        user: state.user
    };
};


// connect function2 agar action bisa di akses component lewat props
// kalo ga pake ini gpp, tapi harus panggil objectnya { todoInputHandler, usernameInputHandler }
const mapDispatchToProps = { //connect function2
    onChangeTodo: todoInputHandler,
    onChangeUsername: usernameInputHandler,
    onAddTodoList: todoListHandler,
    onLoginHandler: loginHandler,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoReduxScreen);
// urutannya            reducer       , actions             class component