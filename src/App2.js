/*import './App2.css';
import React, {useState} from 'react';

const App2 = () => {

    const [weight, setWeight] = useState();
    const [height, setHeight] = useState();
    const [bmi, setBmi] = useState();
    const [message, setMessage] = useState();

     const Calbmi = (event) => {
        event.preventDefault()

        if(weight === 0 || height === 0){
            alert("please Enter valid weight and height")
        }
        else {
            let bmi = ((weight / (height * height)) * 703)
            
            setBmi(bmi.toFixed(1))

            if(bmi < 25){
                setMessage("you are under weight")
            }
            else if(bmi >= 25 && bmi < 30){
                setMessage("you are a healty weight person")
            }
           
         }
     }

     const Reset = () => {
        window.location.reload()
     }

    return (
        <div className="app">
           <div className="container">
              <h2 className='center'>BMI Calculater</h2>
              <form onSubmit={Calbmi}>

                <div>
                    <label>Weight</label>
                    <input type="text" placeholder="Enter weight value" value={weight} onChange={(e) => setWeight(e.target.value)} />
                </div>

                <div>
                    <label>Height</label>
                    <input type="text" placeholder="Enter height value" value={height} onChange={(event) => setHeight(event.target.value)}/>
                </div>
             
          
           <div>
            <button className="btn" type='submit'>Submit</button>
            <button className="btn btn-outLine" onClick={Reset} type='submit'>Reset</button>
           </div>
           <div className="Bmi">  
            <h3>Your BMI: {bmi}</h3>
            <p>{message}</p>

           </div>
            </form>
           </div>
        </div>
    )
}
   
   export default App2;*/

import React from 'react';
import {useState} from 'react'

const App2 = () => {
    const [name, setName] = useState("swapnil");
    const [age, setAge] = useState(23);

    const updateName = () => {
        setName("vrushabh");
    }
    const updateAge = () => {
        setAge(24);
    }
    
    return (
        <div>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <button onClick={updateName}>Change Name</button>
            <button onClick={updateAge}>Change Age</button>
        </div>
    )
}

export default App2;

i
