import React from "react";

export default function RandomNumber(props) {
    const { min, max } = props;
    var randomNumber = Math.floor(Math.random() * max) + min;
    return (
        <>
            <h2>Random Number</h2>

            <h2>Number between {min} and {max} is {randomNumber}</h2>
        </>
    )
}