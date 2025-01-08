import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Import axios directly

// Axios instance configuration
const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000', // Replace with your API base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

const TestAPI = () => {
  const [allStories, setAllStories] = useState([]); // State to store stories

  // Function to fetch all travel stories
  const getAllTravelStories = async () => {
    try {
      const response = await axiosInstance.get('/get-all-stories');
      console.log('Response Data:', response.data); // Log the full response
      if (response.data && response.data.stories) {
        setAllStories(response.data.stories);
      } else {
        console.log('No stories found or invalid response.');
      }
    } catch (error) {
      console.error('Error while fetching stories:', error);
    }
  };

  // UseEffect to call the API on component mount
  useEffect(() => {
    getAllTravelStories();
  }, []);

  return (
    <div>
      <h1>Test API Response</h1>
      {allStories.length > 0 ? (
        <ul>
          {allStories.map((story, index) => (
            <li key={index}>
              <h2>{story.title}</h2>
              <p>{story.story}</p>
              <img src={story.imageUrl} alt={story.title} width="200" />
            </li>
          ))}
        </ul>
      ) : (
        <p>No stories found.</p>
      )}
    </div>
  );
};

export default TestAPI;