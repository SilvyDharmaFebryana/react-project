import React from 'react';
import './Register.css';
import './bootstrap.css';


class RegisterScreen extends React.Component {

    state = {
        user: [],
        username: "",
        password: "",
        password1: "",
        welcome: ""
    }

    render() {

        const { username, password, password1 } = this.state

        const inputHandler = (event, field) => {
            this.setState({ [field]: event.target.value })
        }

        const loginHandler = (event, field) => {
            this.setState({ [field]: event.target.value })
        }

        const usernameBaru = this.state.username
        const passwordBaru = this.state.password
        const rptPassword = this.state.password1
        let submit = this.state.user.concat({ 'username': usernameBaru, 'password': passwordBaru, 'password1': rptPassword })

        const registerAcc = () => {

            this.setState({ user: submit })
            if (password1 !== password) {
                alert('password belom cocok')
                submit = false
            } else {
                alert('berhasil menyimpan')
                submit = true
                document.getElementById("form-regis").reset()
                // document.getElementById("welcome").reset()
            }
        }


        const loginAcc = () => {
            const inputUsername = this.state.username
            const inputPassword = this.state.password

            const usernames =
                this.state.user.find((value) => {
                    return (
                        value.username == inputUsername && value.password == inputPassword
                    )
                })

            const indexUsername =
                this.state.user.findIndex((value) => {
                    return (
                        value.username == inputUsername
                    )
                })

            const indexPassword =
                this.state.user.findIndex((value) => {
                    return (
                        value.password == inputPassword
                    )
                })

            if (indexUsername == indexPassword && usernames) {
                this.setState({ welcome: "Welcome " + inputUsername })
                document.getElementById("form-login").reset()
            } else {
                alert("Username dan password salah")
            }
        }


        // const loginAcc = (e, field) => {

        //     this.setState({ username, password })
        //     if (submit.indexOf('username') !== -1) {
        //         alert('ada')
        //     }
        // }


        // const getUsername = (event) => {

        //     if (this.state.user.username !== event.target.value) {
        //         alert('welcome ' + username)
        //     } else {
        //         alert('tidak ada nama')
        //     }

        // }

        // loginHandle = (event) => {
        //         let field = event.target.name;
        //         let value = event.target.value;

        //         let loginData = this.state.loginData;
        //         loginData[field] = value;

        //         this.setState({loginData: loginData});
        //  }


        // const updateUsername = (e) => {
        //     this.setState({
        //         username: this.state.username.push(e.target.value)
        //       })
        // }

        // const updatePassword = (e) => {
        //     this.setState({
        //         password: this.state.password.push(e.target.value)
        //     })
        // }

        return (
            <div>
                <div>
                    <h1>Auth Screen</h1>
                </div>
                <center>
                    <div className="kotak ">
                        <h3 className="mb-4">Register</h3>
                        <form id="form-regis">
                            <div className="form-group inputs text-center ">
                                <input type="text" className="form-control btns" placeholder="Username" onChange={(e) => inputHandler(e, "username")} />
                            </div>

                            <div className="form-group inputs text-center">
                                <input type="text" className="form-control btns" placeholder="Password" onChange={(e) => inputHandler(e, "password")} />
                            </div>

                            <div className="form-group inputs text-center">
                                <input type="text" className="form-control btns" placeholder="Repeat Password" onChange={(e) => inputHandler(e, "password1")} />
                            </div>

                            <input type="button" class="btn btn-primary btns" value="Submit" onClick={() => registerAcc()} />
                        </form>
                    </div>

                    <div>
                        <h1 id="welcome"> {this.state.welcome} </h1>
                    </div>

                    <div className="mt-3 kotak-log">
                        <h3 className="mb-4">Login</h3>
                        <form id="form-login">
                            <div className="form-group inputs text-center">
                                <input type="text" className="form-control btns" placeholder="Username" onChange={(e) => loginHandler(e, "username")} />
                            </div>

                            <div className="form-group inputs text-center">
                                <input type="text" className="form-control " placeholder="Password" onChange={(e) => loginHandler(e, "password")} />
                            </div>

                            <input type="button" class="btn btn-primary btns-log" value="Login" onClick={() => loginAcc()} />
                        </form>

                    </div>
                </center>
            </div>

        )
    }
}

export default RegisterScreen