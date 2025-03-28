import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Signup = () => {

    // Use States 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    // HandleSubmit Function
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/login', { email, password })
            .then(result => {
                console.log(result)
                if(result.data ==="Success"){
                    navigate('/home')
                }
            })
            .catch(err => console.log(err))
        console.log('Signing up with', email, password);
    };

    return (
        <div className="signup-container">
            <div className="signup-card">
                <h2 className="signup-title">Login</h2>
                <form onSubmit={handleSubmit}>

                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            required
                        />
                    </div>

                    <button type="submit" className="signup-btn">Login</button>
                </form>
                <div className="login-link">
                    Already have an account? <Link to="/signup">Signup</Link>
                </div>
            </div>
        </div>
    )
}

export default Signup
