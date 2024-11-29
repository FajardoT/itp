import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from "react";

import Dashboard from './pages/Dashboard';
import Insights from './pages/Insights';
import ManageTasks from './pages/ManageTasks';
import Profile from './pages/Profile.jsx';
import LoginSignup from './pages/LoginSignup.jsx';


function App() {
  const [currentUser, setCurrentUser] = useState(null); 

  useEffect(() => {
    const user = sessionStorage.getItem("currentUser");
    if (user) {
      setCurrentUser(JSON.parse(user)); 
    }
  }, []);

  // handle successful login
  const handleLoginSuccess = (userId) => {
    sessionStorage.setItem("currentUser", JSON.stringify(userId));
    setCurrentUser(userId); // Update state
  };

  // handle successful logout
  const handleLogout = () => {
    sessionStorage.removeItem('currentUser');
    setCurrentUser(null);
  };

  return (
    <Router>
      <div className="flex h-screen"> 
        {currentUser && <Sidebar onLogout={handleLogout}/>}
        <main className="w-full p-4">
            <Routes>
              <Route path="/" element={<LoginSignup onLoginSuccess={handleLoginSuccess} />} />
              <Route path="/dashboard" element={<Dashboard/>} />
                <Route path="/insights" element={<Insights/>} />
                <Route path="/manage-tasks" element={<ManageTasks/>} />
                <Route path="/profile" element={<Profile/>} />
                <Route path="/" element={<Dashboard/>} />
            </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
