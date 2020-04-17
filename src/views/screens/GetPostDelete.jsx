import React from 'react'
import Axios from 'axios' // mengahsilkan sebuah promise 
import { API_URL } from "../../constants/API"




class GetPostDelete extends React.Component {


    state = {
        usersList: [], // untuk menyimpan data yang di udh di get dari JSON
    }

    

    getDataHandler = () => {


        // Axios.get("http://localhost:3001/users")
        //   .then((res) => {
        //     // res = response dari API

        //     console.log(res.data);
        //     // this.setState({ usersList: res.data });
        //   })
        //   .catch((err) => {
        //     console.log(err);
        //   });
        

        // GET itu method udh read data
        // Request GET by ID
        // ID nya di letakkan setelah '/' nama table
        // Axios.get("http://localhost:3001/users/1") //harus dalam bentuk string, ambil url JSON
        //     .then((res) => {  //res = sebuah parameter callback fn yang artinya response
        //         console.log({ userlist: res.data}) // memakai .data agar di ambil array of object nya aja 
        //         this.setState({ usersList: res.data })
        //     })
        //     .catch((err) => { //err adalah parameter untuk eror
        //         console.log(err)
        //     })


        // GET data berdasarkan parameter yang kita berikan
        Axios.get("http://localhost:3001/users/" , {
            params: { //query params adalah sebuah object
                username: "seto",
                role: "user",
            } 
        }) 
            .then((res) => {  
                console.log(res.data) 
                // this.setState({ usersList: res.data })
            })
            .catch((err) => { 
                console.log(err)
            })


    }


    deleteDataHandler = () => {
        Axios.delete(`${API_URL}/users/`)
        .then((res) => {
            console.log(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }


    postDataHandler = () => {
        Axios.post(`${API_URL}/users`, {
            username: "silvy",
            password: "111",
            role: "admin",
            fullname: "Silvy Febryana"
        })
        .then((res) => {
            console.log(res)
        })
        .catch((err) =>{
            console.log(err)
        })
    }

    render() {

        return (
            <div>
                <h1>Profile</h1>
                <h2>Welcome ! {this.props.match.params.username}</h2>
                <input
                    type="button"
                    value="Get data"
                    className="btn btn-success"
                    onClick={this.getDataHandler} 
                />
                <input
                    type="button"
                    value="Delete data"
                    className="btn btn-danger"
                    onClick={this.deleteDataHandler}
                />
                <input
                    type="button"
                    value="Post data"
                    className="btn btn-info"
                    onClick={this.postDataHandler}
                />
            </div>
        )
    }
}


export default GetPostDelete 