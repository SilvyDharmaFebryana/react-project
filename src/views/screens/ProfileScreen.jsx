import React from 'react'
import Axios from 'axios'
import { API_URL } from "../../constants/API"
import { Link, Redirect } from 'react-router-dom'

class ProfileScreen extends React.Component {

    state = {
        listAccount: [],
        isProfileOn: true
    }

    componentDidMount() {
        Axios.get(`${API_URL}/users`, {
            params: {
                username: this.props.match.params.username,
            }
        }) 
        .then ((res) => {
            this.setState({ listAccount: res.data[0] })
        })
        .catch ((err) => {
            alert('belum ada profile untuk di tampikan')
        })
    }

    render() {
        
        const { listAccount, isProfileOn } = this.state


        if (isProfileOn) {
                return (
                <div className="text-align-left">
                    <div style={{}}>
                        <h1 style={{ fontSize: "50px", fontWeight: "bold", color: "#99003d" }}>Selamat Datang !! {listAccount.fullname}</h1>
                    </div>

                    <div className=" d-flex justify-content-around p-3" style={{ height: "100px" }}>
                        <p>Username : <p style={{ fontWeight: "bold" }}> {listAccount.username} </p></p>
                        <p>Login sebagai : <p style={{ fontWeight: "bold" }}>{listAccount.role} </p></p>
                    </div>

                    <div>
                        <Link to="/"><input type="button" value="Back to home" className="btn btn-warning" /> </Link>
                            
                        <br/>
                        <br/>
                        <Link to="/Login"><input type="button" value="Logout" className="btn btn-danger" /></Link>
                    </div>
                </div>
        
            )
        } else {
              return <Redirect to="/Login" />
        
        }
    }
}


export default ProfileScreen 