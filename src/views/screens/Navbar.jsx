import React from 'react'
import { Link } from 'react-router-dom'


class Navbar extends React.Component {

    render() {

        return (
            <div className="d-flex justify-content-around p-3" style={{ border: "1px solid #e6e6e6", height: "60px", backgroundColor:"#e6e6e6" }}>
                <Link style={{ color: "#cc0052", fontWeight: "bold" }} to="/Auth">Register</Link>
                <Link style={{ color: "#cc0052", fontWeight: "bold" }} to="/Login">Login</Link>
                <Link style={{ color: "#cc0052", fontWeight: "bold" }} to="/Account">List Account</Link>
                <Link style={{ color: "#cc0052", fontWeight: "bold" }} to="/">Home</Link>
                <Link style={{ color: "#cc0052", fontWeight: "bold" }} to="/Profile/:username">Profile</Link>
                
            </div>
        )
    }
}


export default Navbar 