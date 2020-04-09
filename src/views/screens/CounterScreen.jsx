import React from 'react'

const CounterScreen = (props) => {
    return (
        <div>
            <h1>{props.arr}</h1>
        </div>
    )
}

// class CounterScreen extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>{this.props.arr}</h1>
//                 {/* <h1>{this.props.nama}</h1> */}
//             </div>
//         )
//     }
// }

export default CounterScreen