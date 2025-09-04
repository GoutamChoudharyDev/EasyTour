import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
        window.location.reload(); // 👈 refresh so Navbar updates
    };

    return (
        <button className="Navbtn" type="submit" onClick={handleLogout}>Logout</button>
    );
};

export default Logout;
