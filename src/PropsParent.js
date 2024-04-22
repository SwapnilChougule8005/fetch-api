import {useState} from 'react';
import PropsTut from './PropsTut';
import Header from './Header';

const PropsParent = () => {
    const [value, setValue] = useState();
    const handleBtnClick = () => {
        setValue(Math.floor(Math.random() * 100))
    }
    return <>
    <Header titlr="this is parent pag" link={<a href="www.facbook.com">fb login</a>}></Header>
    <button onClick={handleBtnClick}>Dynamic changer</button>
    <PropsTut tutrialNumber={value}></PropsTut>
    </>
}