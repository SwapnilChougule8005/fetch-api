import React from 'react';
import useJsonData from './useJsonData';

const GetAllPost = () => {
    const { data, loading } = useJsonData();

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h1>Data fetched successfully</h1>
            {data ? (
                <ul>
                    <li>ID: {data.id}</li>
                    <li>Title: {data.title}</li>
                    <li>Completed: {data.completed ? 'true' : 'false'}</li>
                </ul>
            ) : (
                <p>No data available</p>
            )}
        </div>
    );
}
export default GetAllPost;

