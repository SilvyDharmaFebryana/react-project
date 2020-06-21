import React from "react"
import Axios from "axios"


const API_URL = `http://localhost:8080`

class AuthSpring extends React.Component {

    state = {
        username: "",
        password: "",
        selectedFile: null,
        file: "",
        fileNames: "",
        formUser: {
            username: "",
            password: ""
        },
        loginState: {
            username: "",
            password: "",
            profilePicture: ""
        }
    }


    // inputHandler = (event, key) => {
    //     const { value } = event.target

    //     this.setState({ 
    //         [key]: value,
    //     })
    // }

    inputHandler = (event, key) => {
        const { value } = event.target

        this.setState({
            formUser: {
                ...this.state.formUser,
                [key]: value 
            },
        })
    }

    registerBtnHandler = () => {
        console.log("register!");
        Axios.post(`${API_URL}/users`, {
            username: this.state.username,
            password: this.state.password
        })
            .then((res) => {
                console.log(res.data);

            })
            .catch((err) => {
                console.log(err);

            })
    }

    loginBtnHandler = () => {
        alert("login!")
        Axios.post(`${API_URL}/documents/login`, this.state.formUser)
            .then((res) => {
                console.log(res.data);
                this.setState({ loginState: res.data })
            })
            .catch((err) => {
                console.log(err);

            })
    }

    fileChangeHandler = (e) => {
        this.setState({ selectedFile: e.target.files[0] });
    };

    fileUploadHandler = () => {
        let formData = new FormData();

        formData.append(
            "file",
            this.state.selectedFile,
            this.state.selectedFile.name
        );
        formData.append("userData", JSON.stringify(this.state.formUser))

        Axios.post(`${API_URL}/documents`, formData)
            .then((res) => {
                console.log(res.data)
                this.setState({ file: res.data })

                let fileName = this.state.file.split("/")[5]
                this.setState({ fileNames: fileName })
            })
            .catch((err) => {
                console.log("ERROR");
                console.log(err);
            });

            
        console.log(this.state.formUser);
        console.log(JSON.stringify(this.state.formUser));
  
    };

    download = () => {
        window.open(`${API_URL}/documents/download/${this.state.fileNames}`);
    };

    render() {
        return (
            <div>
                <h1>AUTH SPRING</h1>

                <h5>username</h5>
                <input type="text" placeholder="username" onChange={e => this.inputHandler(e, "username")} />

                <h5>password</h5>
                <input type="text" placeholder="password" onChange={e => this.inputHandler(e, "password")} />

                <div>
                    <input type="button" value="login" onClick={this.loginBtnHandler} />
                </div>


                <div>
                    <input type="button" value="regis" onClick={this.registerBtnHandler} />
                </div>

                <div>
                    <input type="file" onChange={this.fileChangeHandler} />
                    <input type="button" value="Upload" onClick={this.fileUploadHandler} />
                    <br />
                    <input type="button" value="Download" onClick={this.download} />
                </div>
                <br/>
                <br/>
                <br/>
                <div>
                    <h2>{this.state.loginState.username}</h2>
                    <img src={this.state.loginState.profilePicture} style={{ width: "50%", height:"100%"}} alt=""/>
                </div>

            </div>
        )
    }
}

export default AuthSpring;