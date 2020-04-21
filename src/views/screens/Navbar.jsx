import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import Axios from 'axios'
import { API_URL } from "../../constants/API"
// import { usernameHandler } from "../../redux/actions";


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

    render() {

        return (
            <div className="d-flex justify-content-around p-3" style={{ border: "1px solid #e6e6e6", height: "60px", backgroundColor:"#e6e6e6" }}>
                <Link style={{ color: "#cc0052", fontWeight: "bold" }} to="/Auth">Register</Link>
                <Link style={{ color: "#cc0052", fontWeight: "bold" }} to="/Login">Login</Link>
                <Link style={{ color: "#cc0052", fontWeight: "bold" }} to="/Account">List Account</Link>
                <Link style={{ color: "#cc0052", fontWeight: "bold" }} to="/">Home</Link>
                {/* <Link style={{ color: "#cc0052", fontWeight: "bold" }} to="/Input">Input Screen</Link> */}
                {/* {this.props.todo.todoInput} */}
                {this.props.user.username}
                {/* {this.props.todo.todoList} */}
                {/* {this.state.username} */}
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

// const mapDispatchToProps = { //connect function2
//     changeUsername: usernameHandler
// };

export default connect(mapStateToProps)(Navbar) 