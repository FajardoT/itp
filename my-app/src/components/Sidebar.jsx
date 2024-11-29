import React, { useState } from 'react';
import { FaHome, FaUser, FaCheckSquare, FaSignOutAlt, FaCircleNotch, FaBars, FaChevronLeft } from 'react-icons/fa'; // Updated icons
import { useNavigate } from 'react-router-dom';
import { IoSparkles } from "react-icons/io5"; // more icon
import { Link } from 'react-router-dom';

export default function Sidebar({onLogout}) {
    const [expanded, setExpanded] = useState(true);
    const navigate = useNavigate();

    // handles logout & calls app.js logout
    const handleLogout = () => {
        sessionStorage.removeItem('currentUser');
        onLogout(); 
        navigate('/'); // back to login/signup page
      };

    return (
    <div className={`h-screen bg-gray-100 border-r border-gray-300 flex flex-col ease-in-out duration-300 ${expanded ? 'w-64' : 'w-14'}`}>
        <div className="p-4">
            {/* when sidebar is open */}
            <div className={`flex items-center space-x-3 ${expanded ? 'block' : 'hidden'}`}>
                <FaCircleNotch className="h-6 w-6 text-blue-500"/>
                <span className="text-xl font-bold">TimeSpark</span>
                <FaChevronLeft className="h-6 w-6 cursor-pointer" onClick={() => setExpanded(!expanded)} />
            </div>
            {/* when sidebar is closed */}
            <div className={`flex items-center space-x-3 ${!expanded ? 'block' : 'hidden'}`}>              
                <FaBars className="h-6 w-6 cursor-pointer" onClick={() => setExpanded(!expanded)} />
            </div>
        </div>

        <nav className={`flex-grow flex flex-col mt-4 px-4 ${expanded ? 'block' : 'hidden'}`}>
            <MenuItem icon={<FaHome />} label="Dashboard" to="/dashboard" />
            <MenuItem icon={<IoSparkles />} label="Insights" to="/insights" />
            <MenuItem icon={<FaCheckSquare />} label="Manage Tasks" to="/manage-tasks" />
            <MenuItem icon={<FaUser />} label="Profile" to="/profile" />
        </nav>

        <div className={`p-4 ${expanded ? 'block' : 'hidden'}`}>
            <button className="flex items-center space-x-2 text-red-500 hover:text-red-700 px-4" onClick={handleLogout}>
                <FaSignOutAlt />
                <span>Logout</span>
            </button>
        </div>
    </div>
  );
};


export function MenuItem({ icon, label, to }) {
    return (
        <Link to={to} className="p-4 hover:bg-gray-200 hover:rounded cursor-pointer flex items-center space-x-3">
            <div className="text-gray-600">{icon}</div>
            <span className="text-gray-600 font-medium">{label}</span>
        </Link>
    );
}

