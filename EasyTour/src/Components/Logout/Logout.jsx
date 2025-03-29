import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Remove the JWT token from localStorage
        localStorage.removeItem('token');
        navigate('/login');  // Redirect user to login page after logout
    };

    return (
        <button className="Navbtn" type="submit" onClick={handleLogout}>Logout</button>
    );
};

export default Logout;
