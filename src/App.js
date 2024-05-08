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