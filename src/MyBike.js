//import React from 'react'
import React, {useState} from 'react';

function Bike(){
    let [bike, setBike] = useState({
        brand:"Royal Enfiled",
        model:"Interceptor",
        year:2021,
        color:"red"
    });
    let changeColor = () => {
        setBike(previousState => {
            return {...previousState, color:"black"}
            
        });console.log(Bike.color)
    }
    return (
        <>
        <h1>Bike</h1>
        <p>
            My bike is {bike.brand} {bike.model} 
        </p>
        <button onClick={changeColor}>change color</button>
        </>
    )
}

export default Bike;