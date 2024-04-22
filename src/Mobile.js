//import React from 'react';
//import React, {useState} from 'react';
import Model from './SmartPhone'
import Item from './Item'


let MyMobile = ()=> {
    let brand = "Samsung";
    let model = "F23";
    let color = "Aqua"
    return (
        <div>
            <h1>{brand}</h1>
            <p>model:{model}</p>
            <p>color:{color}</p>
            <Model/>
            <Item/>
        </div>
    )
}

export default MyMobile;