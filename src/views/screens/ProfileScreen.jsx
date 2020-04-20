import React from 'react'
import Axios from 'axios'
import { API_URL } from "../../constants/API"
import { Link, Redirect } from 'react-router-dom'

class ProfileScreen extends React.Component {

    // state = {
    //     listAccount: [],
    //     isProfileOn: true
    // }

    // componentDidMount() {
    //     Axios.get(`${API_URL}/users`, {
    //         params: {
    //             username: this.props.match.params.userId // untuk mencari match username
    //         }
    //     }) 
    //     .then ((res) => {
    //         this.setState({ listAccount: res.data[0] })
    //     })
    //     .catch ((err) => {
    //         alert('belum ada profile untuk di tampikan')
    //     })
    // }
    //=================================================================

    state = {
        id: 0,
        username: "",
        role: "",
        fullName: "",
    };

    componentDidMount() {
        let userId = this.props.match.params.userId;

        Axios.get(`${API_URL}/users/${userId}`)
            .then((res) => {
                console.log(res);

                const { id, username, role, fullname } = res.data;
                this.setState({
                    id,
                    username,
                    role,
                    fullname,
                });
            })
            .catch((err) => {
                console.log(err);
            });
    }

    render() {

        return (
            <div className="text-align-left">
                <div style={{}}>
                    <h1 style={{ fontSize: "50px", fontWeight: "bold", color: "#99003d" }}>Selamat Datang !! {this.state.fullname}</h1>
                </div>

                <div className=" d-flex justify-content-around p-3" style={{ height: "100px" }}>
                    <p>Username : <p style={{ fontWeight: "bold" }}> {this.state.username} </p></p>
                    <p>Login sebagai : <p style={{ fontWeight: "bold" }}>{this.state.role} </p></p>
                </div>

                <div>
                    <Link to="/"><input type="button" value="Back to home" className="btn btn-warning" /> </Link>      
                    <br/>
                    <br/>
                    <Link to="/Login"><input type="button" value="Logout" className="btn btn-danger" /></Link>
                </div>
            </div>
        )
    }
}


export default ProfileScreen 