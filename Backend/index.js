const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');  // Add bcrypt for password hashing
const jwt = require('jsonwebtoken');  // Add JWT for token-based auth
const UserModel = require('./Models/User');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/easytours-user");

// Secret key for JWT
const JWT_SECRET = 'your_secret_key';  // Use a more secure key in production

// Login route
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    UserModel.findOne({ email: email })
        .then(user => {
            if (user) {
                bcrypt.compare(password, user.password, (err, result) => {
                    if (result) {
                        // Generate JWT token
                        const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' });
                        res.json({ success: true, token });
                    } else {
                        res.json({ success: false, message: "Incorrect password" });
                    }
                });
            } else {
                res.json({ success: false, message: "No record found" });
            }
        })
        .catch(err => res.json({ success: false, message: err.message }));
});

// Register route
app.post('/register', (req, res) => {
    const { name, email, password } = req.body;

    // Hash password before saving
    bcrypt.hash(password, 10, (err, hashedPassword) => {
        if (err) {
            return res.json({ success: false, message: err.message });
        }

        UserModel.create({ name, email, password: hashedPassword })
            .then(user => res.json({ success: true, user }))
            .catch(err => res.json({ success: false, message: err.message }));
    });
});

app.listen(3001, () => {
    console.log('Server is running...');
});

