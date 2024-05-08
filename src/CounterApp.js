import React, {useState} from 'react';
import CounterDisplay from './CounterDisplay'

function CounterApp(){
  let [counter, setCounter] = useState(0);

  let Increment = () => {
    setCounter(counter + 1);
  };

  let Decrement = () => {
    if(counter <= 0){
      return;
    }else{
      setCounter(counter - 1);
    }
  };

  let Reset = () => {
    setCounter(0)
  }
  return (<div> 
     <div style={{textAlign:"center",
                  marginTop:"0px",
                  display:'flex',
                  justifyContent:'center',
                  alignItems:'center',
                  background:"greenyellow",
                  height:"100vh",
                  color:"red",
                  }}>
      
      <div>
       <p>display Count : {counter}</p>
      <CounterDisplay

      buttons={
       <div style={{
                   display:"flex",
                   gap:"20px",
                   justifyContent:"center",
                   padding:"10px 20px"
                   }}>
       <button onClick={Increment}>Increament</button>
       <button onClick={Decrement}>Decreament</button>
       <button onClick={Reset}>Reset</button>
      </div>}
      />
      </div>
     </div>
     </div>);
}
export default CounterApp;