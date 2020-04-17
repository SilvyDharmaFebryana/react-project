import React from 'react'
import Axios from 'axios' // mengahsilkan sebuah promise 
import { API_URL } from "../../constants/API"
import { Link, Redirect } from 'react-router-dom'


class RegisterScreenNew extends React.Component {


    state = {
        username: "",
        password: "",
        repPassword: "",
        role: "",
        firstName: "",
        lastName: "",
        fullName: "",
        isRegister: false,
        users: [],
        loginUsername: "",
        loginPassword: "",
        currentUsername: "",
        activeEditIdx: null,

    };

    inputHandler = (e, field) => {
        this.setState({ [field]: e.target.value });
    };



    registerPostDataHandler = () => {
        const { repPassword, password, username, users, firstName, lastName, role, fullName } = this.state
            Axios.get(`${API_URL}/users`, {
                params: {
                    username: username,
                }
            }) 

            .then ((res) =>{
                if (res.data.length == 0) {
                    if (repPassword == password) {
                        Axios.post(`${API_URL}/users`, {
                            username: username,
                            password: password,
                            repPassword: repPassword,
                            role: role,
                            firstname: firstName,
                            lastname: lastName,
                            fullname: firstName + ' ' + lastName
                        })

                            .then((res) => {
                                alert('Berhasil Menyimpan')
                                this.setState({
                                    username: "",
                                    password: "",
                                    repPassword: "",
                                    role: "",
                                    firstName: "",
                                    lastName: "",
                                })

                            })
                            .catch(() => {
                                alert("Password belum cocok")
                            })
                    } else {
                        alert("Password belum cocok");
                    }
                }else {
                    alert('username sudah ada')
                }
            })
            .catch((err) => {
                alert('username sudah ada')
            })

}

    render() {

        const {
            username,
            password,
            repPassword,
            firstName,
            lastName,
            role,
            fullName,
            isRegister,
            users,
            currentUsername,
            activeEditIdx,
            loginPassword,
            loginUsername,
        } = this.state;

        if (!isRegister) {
            return (
                <div>
                    <center>
                        <div className="card p-5" style={{ width: "400px" }}>
                            <h4>Register</h4>
                            <input
                                value={firstName}
                                className="form-control mt-2"
                                type="text"
                                placeholder="Fisrt Name"
                                onChange={(e) => this.inputHandler(e, "firstName")}
                            />
                            <input
                                value={lastName}
                                className="form-control mt-2"
                                type="text"
                                placeholder="Last Name"
                                onChange={(e) => this.inputHandler(e, "lastName")}
                            />
                            <input
                                value={username}
                                className="form-control mt-2"
                                type="text"
                                placeholder="Username"
                                onChange={(e) => this.inputHandler(e, "username")}
                            />
                            <input
                                value={password}
                                className="form-control mt-2"
                                type="text"
                                placeholder="Password"
                                onChange={(e) => this.inputHandler(e, "password")}
                            />
                            <input
                                value={repPassword}
                                className="form-control mt-2"
                                type="text"
                                placeholder="Repeat Password"
                                onChange={(e) => this.inputHandler(e, "repPassword")}
                            />
                            <input
                                value={role}
                                className="form-control mt-2"
                                type="text"
                                placeholder="Role"
                                onChange={(e) => this.inputHandler(e, "role")}
                            />
                            <input
                                type="button"
                                value="Register"
                                className="btn btn-primary mt-3"
                                onClick={this.registerPostDataHandler}
                            />
                        </div>


                    </center>
                </div>
            )

        } else if (isRegister) {
            return (
                <Link to = "/Login"> 
                    <input
                        type="button"
                        value="Click for Login"
                        className="btn btn-primary"
                    />
                </Link>
            )
        }

        
    }
}

export default RegisterScreenNew