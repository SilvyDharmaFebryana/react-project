import React from 'react'
import { Link } from 'react-router-dom'


class InputScreen extends React.Component {

    state = {
        username: "",
        email: "",
        counter: ""
    }




    render(){

        const { username, email, counter} = this.state ;

        const inputHandler = (event, field) => {
            this.setState({ [field]: event.target.value })
        }



        return (
            <div>
                <h1>Input Screen</h1>
                <h3>Username {username}</h3>
                <h3>Email: {email}</h3>
                <input 
                    onChange={(e) => inputHandler(e, 'username')} 
                    // onChange={inputHandler}
                    type="text" 
                    placeholder="Username"
                />
                <br/>
                <input 
                    onChange={(e) => inputHandler(e, 'email')} 
                    type="text" 
                    placeholder="email"
                />
                <br/>
                <textarea 
                    onChange={(e) => inputHandler(e, 'counter')}  
                    name="" 
                    id="" 
                    cols="30" 
                    rows="10">    
                </textarea>
                <p> {counter.length} / 140 </p>


                  <Link to={"/Profile/" + username}>
                      <input className="btn btn-primary" type="button" value="Login"/>
                  </Link>
    
            </div>
        )
    }
}

export default InputScreen;