import React, { useState, useEffect } from 'react';

const useJsonData = () => {
    const [loading, setLoading] = useState(true); 
    const [data, setData] = useState(); 

    const fetchApi = () => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => {
                setData(json);
                setLoading(false); 
            })
            .catch(error => {
                console.log(error);
                });
    }

    useEffect(() => {
        fetchApi();
    }, []);

    return {
        data,
        loading
    };
}
export default useJsonData;
