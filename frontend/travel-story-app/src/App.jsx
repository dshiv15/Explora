// import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
// import React from "react";

// import Login from "./pages/Auth/login";
// import Signup from "./pages/Auth/signup";
// import Home from "./pages/Home/home";

// // Define the Root component to handle the initial redirect
// const Root = () => {
//   // Check if token exists in localStorage
//   const isAuthenticated = !!localStorage.getItem("token");

//   // Redirect to dashboard if authenticated, otherwise to login
//   return isAuthenticated ? (
//     <Navigate to="/dashboard" />
//   ) : (
//     <Navigate to="/login" />
//   );
// };

// function App() {
//   return (
//     <div>
//       <Router>
//         <Routes>
//           <Route path="/" element={<Root />} />
//           <Route path="/dashboard" element={<Home />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<Signup />} />
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;
import React from 'react';
import TestAPI from './components/inputs/cards/TestAPI';

const App = () => {
  return (
    <div>
      <TestAPI />
    </div>
  );
};

export default App;