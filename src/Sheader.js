/*const Sheader = (props) => {
    const LogoutBtn = () => {
        alert("logut your account");
    }
    return (
        <header style={{
            display:"flex",
            justifyContent:"space-between",
            width:"100vw",
            alignItems:"center"
        }}>

          <h1 style={{margin:0}}>{props.title}</h1>
           <div style={{display:"flex", gap:"20px",alignItems:"center"}}>
           {
            props.buttons
           }
            <button onClick={LogoutBtn}>Logout</button>
           </div>
        
        </header>
    )
}
export default Sheader;*/

import React from 'react';
import CounterApp from './Counter';

const App = (props) => {

    return <>
   <App>
    <h1>Counter:{props.counter}</h1>
    <div>
        {props.button}
    </div>
   </App>



         </>
}

export default App;