import React from "react";
import Axios from "axios";
import { API_URL } from "../../constants/API";

class ListUser extends React.Component {
    state = {
        listUser: []
    };
    componentDidMount() {
        Axios.get(`${API_URL}/users`)
            .then(res => {
                console.log(res);
                this.setState({ listUser: res.data });
            })
            .catch(err => {
                console.log(err);
            });
    }

    renderUserData = () => {
        const { listUser } = this.state;
        return listUser.map((val, idx) => {
            return (
                <tr>
                    <td> {idx + 1} </td>
                    <td> {val.username} </td>
                    <td> {val.fullname} </td>
                    <td> {val.role} </td>
                </tr>
            );
        });
    };

    render() {
        const { listUser } = this.state;

        return (
            <div className="d-flex flex-column align-items-center justify-content-center">
                <table className="table table-striped" style={{ width: "80%" }}>
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">No</th>
                            <th scope="col">Username</th>
                            <th scope="col">Full Name</th>
                            <th scope="col">Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        this.renderUserData()
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ListUser;