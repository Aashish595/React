import React from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {
    const data = useLoaderData();

    console.log(data); // Inspect the structure of the fetched data

    if (!data || !data.followers) {
        return <div>Error loading data. Please try again later.</div>;
    }

    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-4xl '>
            Github Followers: {data.followers}
            <img src={data.avatar_url} alt="GitHub profile" />
        </div>
    );
}

export default Github;

export const githubInfoLoader = async () => {
    try {
        const response = await fetch('https://api.github.com/users/hiteshchoudhary');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    } catch (error) {
        console.error('Fetching error:', error);
        return null; // Return null if there's an error
    }
};
