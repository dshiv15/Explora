import React from 'react';
import ProfileInfo from './cards/ProfileInfo';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ userInfo }) => {
  const isToken = localStorage.getItem("token");
  const navigate = useNavigate();

  const onLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  console.log("Navbar userInfo:", userInfo);

  return (
    <div className="bg-white flex items-center justify-between px-6 py-2 drop-shadow sticky top-0 z-10">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="200"
        height="50"
        viewBox="0 0 200 50"
        className="h-9"
      >
        <text
          x="0"
          y="35"
          font-family="'Pacifico', cursive"
          font-size="35"
          fill="#00bcd4"
        >
          Travel Story
        </text>
      </svg>
      <ProfileInfo userInfo={userInfo} onLogout={onLogout} />
    </div>
  );
};

export default Navbar;