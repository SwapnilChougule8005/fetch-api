import React from 'react';
import {createRoot} from 'react-dom/client';
import GetAllPost from './GetAllPost'

const rootDiv = document.getElementById('root');
const root = createRoot(rootDiv);

root.render(<GetAllPost/>);

