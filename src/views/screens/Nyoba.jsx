// import React from "react"
// import Axios from "axios";
// import { API_URL } from "../../constants/API"
// import { Link, Redirect } from "react-router-dom";
// import swal from "sweetalert";
// import {
//     todoInputHandler,
//     usernameInputHandler,
//     passwordInputHandler,
// } from "../../redux/actions";
// import { connect } from "react-redux";


// class LoginScreen extends React.Component {
//     // state = {
//     //     // usernameInput: "",
//     //     // passwordInput: "",
//     //     loginIs: false,

//     // }
//     // inputHandler = (e, field) => {
//     //     this.setState({ [field]: e.target.value });
//     // };
//     getDataHandler = () => {
//         // const { usernameInput, passwordInput } = this.state
//         Axios.get(`${API_URL}/users`, {
//             params: {
//                 username: this.props.user.usernameInput,
//                 // password: this.props.user.passwordInput,
//             }
//         })

//             .then((res) => {
//                 console.log(res);

//             })

//             .catch((err) => {
//                 console.log(err);

//             })
//     }
//     render() {
//         // const {
//         //     usernameInput,
//         //     passwordInput,
//         //     loginIs
//         // } = this.state

//         // if (!loginIs) {
//         return (
//             <div className="container d-flex flex-column justify-content-center align-items-center  mt-4 mb-2" style={{ width: 'auto' }}>
//                 <h1 className="text-uppercase font-weight-bold" style={{ color: "green" }}>Login Page</h1>
//                 <h1>{this.props.user.usernameInput}</h1>
//                 <h1>{this.props.user.passwordInput}</h1>
//                 <div className="bg-grey">
//                     <input type="text"
//                         className="form-control p-2 mb-2"
//                         name=""
//                         id=""
//                         placeholder="Username"
//                         // value={usernameInput}
//                         onChange={(e) => this.props.onChangeUsername(e.target.value)}
//                     />
//                     <input type="password"
//                         className="form-control p-2 mb-2"
//                         name=""
//                         id=""
//                         // value={passwordInput}
//                         placeholder="Password"
//                         onChange={(e) => this.props.onChangePassword(e.target.value)}
//                     />
//                     <center>
//                         {/* <Link to='/home'> */}
//                         <input
//                             type="button"
//                             className="btn btn-success"
//                             value="Login"
//                             onClick={this.getDataHandler}
//                         />
//                         {/* </Link> */}

//                     </center>

//                 </div>

//             </div>
//         )
//         // } else {
//         //     return (
//         //         <Redirect to={'/home/' + usernameInput} />
//         //     )

//         // }


//     }

// }
// const mapStateToProps = (state) => {
//     return {
//         todo: state.haha,
//         user: state.user,
//     };
// };

// const mapDispatchToProps = {
//     onChangeTodo: todoInputHandler,
//     onChangeUsername: usernameInputHandler,
//     // onAddTodo: addTodoHandler,
//     onChangePassword: passwordInputHandler,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);