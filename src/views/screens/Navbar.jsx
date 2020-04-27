import React from 'react';
import { Link, Redirect} from 'react-router-dom';
import { connect } from 'react-redux'
import Axios from 'axios'
import { API_URL } from "../../constants/API"
import cookie from "universal-cookie"
import { logoutHandler } from '../../redux/actions'
import swal from 'sweetalert'

const cookieObject = new cookie()


class Navbar extends React.Component {

    onLogout = () => {
        cookieObject.remove("authData")
        this.props.logoutHandler()  
        swal('anda akan keluar')  
    }

    showButtonLogout = () => {
        if (this.props.user.id) {
            return (
                <Link style={{ color: "#cc0052", fontWeight: "bold" }} onClick={this.onLogout}>Logout</Link>
            )
        } else {
            return (
                <Link style={{ color: "#cc0052", fontWeight: "bold" }} to="/Login">Login</Link>
            )
        }
    }

    render() {

        return (
            <div className="d-flex justify-content-around p-3" style={{ border: "1px solid #e6e6e6", height: "60px", backgroundColor:"#e6e6e6" }}>
                <Link style={{ color: "#cc0052", fontWeight: "bold" }} to="/Auth">Register</Link>
                {/* <Link style={{ color: "#cc0052", fontWeight: "bold" }} to="/Login">Login</Link> */}
                <Link style={{ color: "#cc0052", fontWeight: "bold" }} to="/Account">List Account</Link>
                <Link style={{ color: "#cc0052", fontWeight: "bold" }} to="/">Home</Link>
                {
                    this.showButtonLogout()
                }
                <h6 className="p-1" style={{ color: "#80002a", fontWeight: "bold" }}>Welcome, {this.props.user.username} </h6>
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