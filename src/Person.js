

import React, {useState} from 'react';

function PersonDetails(){
    let [name, setName] = useState("swapnil");
    let [age, setAge] = useState(23);

    let updateName = () =>{
        setName("vrushabh");
    };

    let updateAge = () => {
        setAge(24);
    };
  return (
    <div>
        <p>name:{name}</p>
        <p>age:{age}</p>
        <button onClick={updateName}>change name</button>
        <button onClick={updateAge}>change age</button>
    </div>
  )
}

export default PersonDetails;