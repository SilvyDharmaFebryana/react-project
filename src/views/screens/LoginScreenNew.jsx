
import React, { Component } from "react";
import Axios from "axios";
import { Redirect } from "react-router-dom";
import { API_URL } from "../../constants/API";
import swal from "sweetalert";
import { connect } from "react-redux";
import { loginHandler, logoutHandler } from "../../redux/actions";
import Cookie from 'universal-cookie'

const cookieObject = new Cookie();

class LoginScreenNew extends Component {
    state = {
        username: "",
        password: "",
        fullname: "",
        role: "",
        isLoggedIn: false,
        loginProfile: {},
    };


    inputHandler = (event, field) => {
        const { value } = event.target;
        this.setState({ [field]: value });
    };

    loginHandler = () => {
        const { username, password } = this.state;

        const userData = {
            username,
            password,

        }

        this.props.onLogin(userData)

        // Axios.get(`${API_URL}/users`, {
        //     params: {
        //         username,
        //         password,
        //     },
        // })
        //     .then((res) => {
        //         if (res.data.length !== 0) {
        //             swal("Success!", "Anda berhasil login", "success");
        //             this.props.onUserLogin(username)
        //             this.setState({ isLoggedIn: true, loginProfile: res.data[0] });
        //         } else {
        //             swal("Error!", "Username atau password salah", "error");
        //         }
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     });

    };



    // 1. Login dan ubah global state user menjadi data user
    //    --> id, username, fullname, role
    // 2. Check di app.js, jika global state user sudah terisi dengan data user, 
    //    set cookie dengan data user

    // --> component yg akan di lakukan ketika ada komponen yg di update     
    //     komponen tersebut berupa props atau state 
    // --> global state telah di map ke props melalui function mapStateToProps dan connect
    // --> global state == props
    // --> jika global state berubah makan props akan berubah, krn isi props adalah global state
    // --> jika props berubah, componentDidUpdate akan ter-trigger dan jalan

    componentDidUpdate() {
        // jika this.props.user.id yang di panggil krn ID akan selalu ada dan beda
        // dan brrti data orang tersebut sudah dalam global state

        if (this.props.user.id > 0) {
            cookieObject.set("authData", JSON.stringify(this.props.user))
            console.log(this.props.user)
        }
    }

    // onLogout = () => {
    //     swal('anda akan keluar')
    //     this.props.logoutHandler()
    //     cookieObject.remove("authData")
    // }


    render() {
        if (!this.props.user.id) {
            return (
                <div className="container d-flex justify-content-center" style={{ width: "400px", height: "300px" }}>
                    <div className="card p-5" style={{ width: "400px" }}>
                        <h4>Login</h4>
                        <p>Hai, <b>{this.props.user.username}</b></p>
                        <input
                            className="form-control mt-2"
                            type="text"
                            placeholder="Username"
                            onChange={(e) => this.inputHandler(e, "username")}
                        />
                        <input
                            className="form-control mt-2"
                            type="password"
                            placeholder="Password"
                            onChange={(e) => this.inputHandler(e, "password")}
                        />
                        <input
                            type="button"
                            value="Login"
                            className="btn btn-primary mt-3"
                            onClick={this.loginHandler}
                        />
                    </div>
                </div>
            );
            // }
        } else {
            return (
                <>
                <div>Hai</div>
                </>
            ) 
          // return <Redirect to={`/profile/${this.state.loginProfile.id}`} />;
        }
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    };
};

const mapDispatchToProps = {
    onLogin: loginHandler,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreenNew);


//=========================================================================================================================================================================

// import React from 'react'
// import Axios from 'axios';
// import { API_URL } from "../../constants/API"
// import { Link, Redirect } from 'react-router-dom'


// class LoginScreenNew extends React.Component {


//     state = {
//         username: "",
//         password: "",
//         repPassword: "",
//         role: "",
//         firstName: "",
//         lastName: "",
//         fullName: "",
//         isLoggedIn: false,
//         users: [],
//         loginUsername: "",
//         loginPassword: "",
//         currentUsername: "",
//         activeEditIdx: null,

//     };


//     inputHandler = (e, field) => {
//         const { value } = e.target
//         this.setState({ [field]: value });
//     };


//     loginHandler = () => {
//         const { loginUsername, loginPassword } = this.state;

//         Axios.get(`${API_URL}/users`, {
//             params: {
//                 username: loginUsername,
//                 password: loginPassword,
//             }
//         }) 
//         .then((res) =>{

//             for (let i = 0; i < res.data.length; i++) {
//                 if (
//                     res.data[i].username == loginUsername &&
//                     res.data[i].password == loginPassword
//                 ) {
//                     this.setState({
//                         isLoggedIn: true,
//                         currentUsername: res.data[i].username,  
//                         loginUsername: "",
//                         loginPassword: "",
//                     })

//                 } 

//                 if (res.data.length == 0) {
//                     alert("User tidak ada atau password salah");
//                 }
//             }
//         })

//         .catch((err) =>{
//             alert("User tidak ada atau password salah");
//         })

//     };

//     render(){

//         const {
//             isLoggedIn,
//             currentUsername,
//             loginPassword,
//             loginUsername,
//         } = this.state;

//         if (!isLoggedIn) {
//             return(
//                     <div>
//                         <center>
//                             <div className="card p-5" style={{ width: "400px" }}>
//                                 <h4>Login</h4>
//                                 <input
//                                     value={loginUsername}
//                                     className="form-control mt-2"
//                                     type="text"
//                                     placeholder="Username"
//                                     onChange={(e) => this.inputHandler(e, "loginUsername")}
//                                 />
//                                 <input
//                                     value={loginPassword}
//                                     className="form-control mt-2"
//                                     type="text"
//                                     placeholder="Password"
//                                     onChange={(e) => this.inputHandler(e, "loginPassword")}
//                                 />
//                                 <input
//                                     type="button"
//                                     value="Login"
//                                     className="btn btn-primary mt-3"
//                                     onClick={this.loginHandler}
//                                 />
//                             </div>
//                             {/* {isLoggedIn ? <h2>Welcome {currentUsername}</h2> : null} */}
//                         </center>
//                     </div >
//                     )

//         } else {
//             return <Redirect to={`/Profile/${currentUsername}`} />
//         }

//     }
// }

// export default LoginScreenNew