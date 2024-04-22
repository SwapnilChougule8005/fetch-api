import React from 'react';
import {useState} from 'react';

const Page = () => {
    const [syncCount, setSyncCount] = useState(0);
    const [asyncCount, setAcyncCount] = useState(0);

    const handleSyncUpdate = () => {
        setSyncCount((prevState) => prevState + 1);
    }
    const handleAsynUpdate = () => {
        setAcyncCount (asyncCount + 1);
    }
    return (
        <>
        <h2>syncronous state update</h2>
        <p>symc count: {syncCount}</p>
        <button onClick={handleSyncUpdate}>increment sync</button>

        <h2>acycronous state update</h2>
        <p>async count: {asyncCount}</p>
        <button onClick={handleAsynUpdate}>increment async</button>
        </>
    )
}
export default Page;