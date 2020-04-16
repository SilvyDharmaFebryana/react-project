import React from 'react'
import { Link } from 'react-router-dom'
 

class Navbar extends React.Component {

    render() {
        
        return(
            <div className="d-flex justify-content-around" style={{ height: "120px" }}>
                <Link to="/Auth">Register | Login</Link>
                <Link to="/Input">Input</Link>
                <Link to="/Counter">Counter</Link>
                <Link to="/Profile/{username}">Profile</Link>
                <Link to="/">Home</Link>


            </div>
        )
    }
}


export default Navbar 