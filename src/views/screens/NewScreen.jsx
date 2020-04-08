import React from 'react';

const KomponenMe = () => {
    const btnHandler = () => {
        alert("click")
    }
    return (
        <div>
            <input onClick={btnHandler} type="button" value="Click me!" />
        </div>
    )
}

const Input = () => {
    return(
        <div>
            <input type="text" name="input" id="input"/>
        </div>
    )
}

const NewScreen = () => {
    return (
        <div>
            <h1>Hallo!! aku new screen</h1>
            <Input />
            <KomponenMe />
        </div>

    )
}

export default NewScreen;