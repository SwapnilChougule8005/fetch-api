


import React from 'react';
import {createRoot} from "react-dom/client";


import App2 from './App2';
import './App2.css';


let rootDiv = document.getElementById('root');
let root = createRoot(rootDiv);

root.render(<App2/>)
