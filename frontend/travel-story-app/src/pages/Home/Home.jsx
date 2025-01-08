// // import React, { useState, useEffect } from 'react';
// // import Navbar from '../../component/Navbar';
// // import TravelStoryCard from '../../component/cards/TravelStoryCard';
// // import { useNavigate } from 'react-router-dom';
// // import axiosInstance from '../../utils/axiosinstance'; // Ensure axiosInstance is correctly set up

// // function Home() {
// //   const navigate = useNavigate();
// //   const [userInfo, setUserInfo] = useState(null);

// //   // Get User Info
// //   const getUserInfo = async () => {
// //     try {
// //       const response = await axiosInstance.get('/get-user');
// //       if (response.data && response.data.user) {
// //         setUserInfo(response.data.user); // Set user info
// //       }
// //     } catch (error) {
// //       if (error.response && error.response.status === 401) {
// //         localStorage.clear(); // Clear local storage if unauthorized
// //         navigate('/login'); // Redirect to login
// //       }
// //     }
// //   };
// //    // console.log(userInfo); for testing

// //    const getAllTravelStories = async () => {
// //     try{
// //     const response = await axiosInstance.get("/get-all-stories");
// //     if (response.data && response.data.stories) {
// //     setAllStories(response.data.stories);
    
// //     }} catch (error){
// //     console. log("An unexpected error occurred. Please try again.");
    
// //     }

// //   // Fetch user info on component mount
// //   useEffect(() => {
// //     getUserInfo();
// //   }, []);

// //   return (
// //     <div>
// //       {/* Pass user info to Navbar */}
// //       <Navbar userInfo={userInfo} />
// //       {/* Render TravelStoryCard */}
// //       <TravelStoryCard />
// //     </div>
// //   );
// // }

// // export default Home;


// import React, { useState, useEffect } from 'react';
// import Navbar from '../../component/Navbar';
// import TravelStoryCard from '../../component/cards/TravelStoryCard';
// import { useNavigate } from 'react-router-dom';
// import axiosInstance from '../../utils/axiosinstance'; // Ensure axiosInstance is correctly set up

// function Home() {
//   const navigate = useNavigate();
//   const [userInfo, setUserInfo] = useState(null);
//   const [allStories, setAllStories] = useState([]); // State for all travel stories

//   // Get User Info
//   const getUserInfo = async () => {
//     try {
//       const response = await axiosInstance.get('/get-user');
//       if (response.data && response.data.user) {
//         setUserInfo(response.data.user); // Set user info
//       }
//     } catch (error) {
//       if (error.response && error.response.status === 401) {
//         localStorage.clear(); // Clear local storage if unauthorized
//         navigate('/login'); // Redirect to login
//       }
//     }
//   };

//   //console.log(userInfo);

//   // Get All Travel Stories
//   const getAllTravelStories = async () => {
//     try {
//       const response = await axiosInstance.get('/get-all-travel-stories');
//       if (response.data && response.data.stories) {
//         setAllStories(response.data.stories); // Set all stories
//       }
//     } catch (error) {
//       console.log('An unexpected error occurred. Please try again.');
//     } 
//   };
//     console.log(allStories);
//   // Fetch user info and stories on component mount

//   const updateIsFavourite = async (storyData) => {
//     const storyId = storyData._id;
  
//     try {
//       const response = await axiosInstance.put(
//         "/update-is-favourite/" + storyId,
//         {
//           isFavourite: !storyData.isFavourite,
//         }
//       );
  
//       if (response.data && response.data.story) {
//         toast.success("Story Updated Successfully");
//         getAllTravelStories();
//       }
//     } catch (error) {
//       console.log("An unexpected error occurred. Please try again.");
//     }
//   };
  
//   useEffect(() => {
//     getUserInfo();
//     getAllTravelStories();
//   }, []);

//   return (
//     <div>
      
//       {/* Pass user info to Navbar */}
//       <Navbar userInfo={userInfo} />
//       {/* Render TravelStoryCard */}
//       {allStories.map((story, index) => (
//         <TravelStoryCard  key={index}
//         title={story.title}
//         imageUrl={story.imageUrl}
//         createdOn={story.createdOn}
//         story={story.story}
//         visitedLocation={story.visitedLocation}
//         isFavourite={story.isFavourite}/>
//       ))}
//     </div>
//   );
// }

// export default Home;


import React, { useState, useEffect } from 'react';
import Navbar from '../../components/inputs/Navbar';
import TravelStoryCard from '../../components/inputs/cards/TravelStoryCard';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../utils/axiosInstance'; // Ensure axiosInstance is correctly set up

function Home() {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState(null);
  const [allStories, setAllStories] = useState([]); // State for all travel stories

  // Get User Info
  const getUserInfo = async () => {
    try {
      const response = await axiosInstance.get('/get-user');
      if (response.data && response.data.user) {
        setUserInfo(response.data.user); // Set user info
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        localStorage.clear(); // Clear local storage if unauthorized
        navigate('/login'); // Redirect to login
      }
    }
  };

  // Get All Travel Stories
  const getAllTravelStories = async () => {
    try {
      const response = await axiosInstance.get('/get-all-stories');
      if (response.data && response.data.stories) {
        setAllStories(response.data.stories); // Set all stories
      }
    } catch (error) {
      console.log('An unexpected error occurred. Please try again.');
    }
  };

  // Update Favourite Status
  const updateIsFavourite = async (storyData) => {
    const storyId = storyData._id;

    try {
      const response = await axiosInstance.put(`/update-is-favourite/${storyId}`, {
        isFavourite: !storyData.isFavourite,
      });

      if (response.data && response.data.story) {
        console.log('Story Updated Successfully');
        getAllTravelStories(); // Refresh the list of stories
      }
    } catch (error) {
      console.log('An unexpected error occurred. Please try again.');
    }
  };

  // Handle Edit (Placeholder)
  const handleEdit = (story) => {
    console.log('Edit story:', story);
  };

  // Handle View Story (Placeholder)
  const handleViewStory = (story) => {
    console.log('View story:', story);
  };

  console.log(allStories.map((story) => story.imageUrl));

  // Fetch user info and stories on component mount
  useEffect(() => {
    getUserInfo();
    getAllTravelStories();
  }, []);

  return (
    <div>
      {/* Pass user info to Navbar */}
      <Navbar userInfo={userInfo} />

      {/* Main Container */}
      <div className="container mx-auto py-10">
        {allStories.length > 0 ? (
          <div className="grid grid-cols-2 gap-4">
           
           
            {allStories.map((story, index) => (
        <TravelStoryCard  key={index}
        title={story.title}
        imageUrl={story.imageUrl}
        createdOn={story.createdOn}
        story={story.story}
        visitedLocation={story.visitedLocation}
        isFavourite={story.isFavourite}
        onEdit={() => handleEdit(story)}
        onClick={() => handleViewStory(story)}
        onFavouriteClick={() => updateIsFavourite(story)}
        />
      ))}
          </div>
        ) : (
          <p>No travel stories found.</p>
        )}
      </div>
    </div>
  );
}

export default Home;