import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import Axios from 'axios'
import { API_URL } from "../../constants/API"
import cookie from "universal-cookie"
import { logoutHandler } from '../../redux/actions'
import swal from 'sweetalert'

const cookiesObject = new cookie()


class Navbar extends React.Component {

    // state = {
    //     username: ""
    // };

    // componentDidMount() {
    //     let userId = this.props.userId;

    //     Axios.get(`${API_URL}/users/${userId}`)
    //         .then((res) => {
    //             console.log(res);

    //             const { username } = res.data;
    //             this.setState({
    //                username
    //             });
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // }

    onLogout = () => {
        swal('anda akan keluar')
        this.props.logoutHandler()
        cookiesObject.remove("authData")
    }

    showButtonLogout = () => {
        if (this.props.user.id) {
            return (
                <Link style={{ color: "#cc0052", fontWeight: "bold" }} onClick={this.onLogout}>
                    Logout
                </Link>
            )
        } else {
            return (
                null
            )
        }
    }

    render() {

        return (
            <div className="d-flex justify-content-around p-3" style={{ border: "1px solid #e6e6e6", height: "60px", backgroundColor:"#e6e6e6" }}>
                <Link style={{ color: "#cc0052", fontWeight: "bold" }} to="/Auth">Register</Link>
                <Link style={{ color: "#cc0052", fontWeight: "bold" }} to="/Login">Login</Link>
                <Link style={{ color: "#cc0052", fontWeight: "bold" }} to="/Account">List Account</Link>
                <Link style={{ color: "#cc0052", fontWeight: "bold" }} to="/">Home</Link>
                {/* <Link style={{ color: "#cc0052", fontWeight: "bold" }} to="/Input">Input Screen</Link> */}
                {/* {this.props.todo.todoInput} */}
                {/* {this.props.user.username}  */}
                {/* <input type="button" value="logout" onClick={this.onLogout} className="btn btn-warning" /> */}
                {
                    this.showButtonLogout()
                }
                {this.props.user.username} 
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todo: state.todo,
        user: state.user
    }
}

const mapDispatchToProps = { //connect function2
    logoutHandler,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar) 