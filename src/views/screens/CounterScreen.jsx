import React from 'react'

// const CounterScreen = (props) => {
//     return (
//         <div>
//             <h1>{props.arr}</h1>
//         </div>
//     )
// }

class CounterScreen extends React.Component {

    state = {
        counter1: 0,
        counter2: 0,
        counter3: 0,
    }

    render() {
        return (
            <div>
                <h1 className="row">
                    <div className="col-4"> counter 1 = {this.state.counter1} 
                        <div>
                            <input 
                                className="btn btn-primary" 
                                type="button" 
                                value="+" 
                                onClick={() => this.setState({ counter1: this.state.counter1 + 1 })} 
                            /> 
                            <input 
                                className="btn btn-danger" 
                                type="button"
                                value="-"
                                onClick={() => this.setState({ counter1: this.state.counter1 - 1 })} 
                            />
                        </div>
                    </div>
                    <div className="col-4"> counter 2 = {this.state.counter2}
                        <div>
                            <input 
                                className="btn btn-primary" 
                                type="button" 
                                value="+" 
                                onClick={() => this.setState({ counter2: this.state.counter2 + 1 })} 
                            /> 
                            <input 
                                className="btn btn-danger" 
                                type="button"
                                value="-"
                                onClick={() => this.setState({ counter2: this.state.counter2 - 1 })} 
                            />
                        </div> </div>
                    <div className="col-4"> counter 3 = {this.state.counter3} 
                        <div>
                            <input 
                                className="btn btn-primary" 
                                type="button" 
                                value="+" 
                                onClick={() => this.setState({ counter3: this.state.counter3 + 1 })} 
                            /> 
                            <input 
                                className="btn btn-danger" 
                                type="button"
                                value="-"
                                onClick={() => this.setState({ counter3: this.state.counter3 - 1 })} 
                            />
                        </div>
                    </div>
                </h1>

                {/* <h1>{this.props.nama}</h1> */}

                <h1>All Counter</h1>
                <div>
                    <input 
                        className="btn btn-primary" 
                        type="button" 
                        value="+" 
                        onClick={() => this.setState({ counter3: this.state.counter3 + 1 ,  counter2: this.state.counter2 + 1 , counter1: this.state.counter1 + 1})} 
                        /> 
                    <input 
                        className="btn btn-danger" 
                        type="button"
                        value="-"
                        onClick={() => this.setState({ counter3: this.state.counter3 - 1 ,  counter2: this.state.counter2 - 1 , counter1: this.state.counter1 - 1 })} 
                    />
                </div>

                <div>
                    <input 
                        className="btn btn-info" 
                        type="button" 
                        value="reset"
                        onClick={() => this.setState({ counter3: 0 ,  counter2: 0 , counter1: 0 })} 
                    />
                </div>





                {/* <input
                    className="btn btn-primary"
                    type="button"
                    value="Click me to change state"
                    onClick={() => this.setState({ counter: this.state.counter + 1 })}
                /> */}
            </div>
        )
    }
}

export default CounterScreen