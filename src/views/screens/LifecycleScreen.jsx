import React from 'react'
import { render } from '@testing-library/react'


class LifecycleScreen extends React.Component{

    state = {
        username: "",
        time: new Date(),
    }

    componentDidMount() {
        // alert('Hallo kamu sudah masuk ke sini')
        // this.setState({ username: "blackwidow" })
        alert('jam mulai')
        this.timer = setInterval(
            () => this.triggerClock(), 1000
        )
    }

    componentDidUpdate() {
        //tidak boleh setState di dalam componentDidUpdate
        console.log(this.state.username)
    }


    triggerClock = () => {
        this.setState({ time: new Date() })
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }


    //didmount hanya terpanggil di renderpertama

    render() {
        return (
            <div>
                <h1>Lifecycle Screen</h1>

                <h2>{this.state.time.toLocaleTimeString()}</h2>
                {/* <h2>Welcome, {this.state.username}</h2>
                <input 
                    type="text" 
                    onChange={(e) => this.setState({ username: e.target.value })} 
                />
                <a href="https://www.google.com">Link Google</a> */}
            </div>
        )
    }
}

export default LifecycleScreen