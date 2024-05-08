

import React from 'react';
import {useState} from "react";
import App from './Sheader'

const CounterApp = (props) => {
    const [counter, setCounter] = useState(0);

    let OnClickIncreament = () => {
        setCounter(counter + 1);
    };
    let OnClickDecreament = () => {
        if(counter <= 0){
            return 
        }else {
            setCounter(counter - 1);
        }
    }

    return <>
    <App Buttons={
    <div>
         
         <button onClick={OnClickIncreament}>Increament</button>
         <button onClick={OnClickDecreament}>decreament</button>

    </div>

}
    
    />
    
    </>
}

export default CounterApp;