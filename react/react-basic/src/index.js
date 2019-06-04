import React from 'react';
import ReactDOM from 'react-dom';


const App = () => {
    const buttonText = {text: 'click me object'};

    function timeNow() {
        const now = new Date();
        let currentTime = now.toLocaleTimeString();
        // let newTime = currentTime.toLocaleTimeString();
        return currentTime;
    }
    console.log("Current time is : ",timeNow());
    

    return (
        <div>
            <label className="label" htmlFor="name">Ente r Name:</label>
            <input id="name" type = "text"/>
            <button style={{backgroundColor:"blue", color: "white"}}>{buttonText.text}</button>
            <p style={{fontWeight:"bold"}}>Current Time : {timeNow()}</p>
        </div>
    );
};

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);