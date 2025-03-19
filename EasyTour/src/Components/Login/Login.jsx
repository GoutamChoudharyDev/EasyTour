import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {

    // Use States
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    // HandleSubmit function
    const handleSubmit = (e) => {
        // e.preventDefault();
        // if (!email || !password) {
        //     setError('Please fill in both fields.');
        // } else {
        //     setError('');
        //     // Add your login here
        //     console.log('Logging in with', email, password);
        // }

        // .................backend..................
        fetch('http://localhost:5000/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.error) {
                    setError(data.error);
                } else {
                    console.log('Login successful:', data);
                    // Save token to localStorage or context
                }
            })
            .catch((err) => console.error('Error:', err));
        // .................backend..................
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <h2 className="login-title">LOGIN FORM</h2>
                {error && <div className="error-message">{error}</div>}
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

                    <button type="submit" className="login-btn">Login</button>
                </form>
                <div className="signup-link">
                    Don't have an account? <Link to="/signup">Signup</Link>
                </div>
            </div>
        </div>
    )
}

export default Login
