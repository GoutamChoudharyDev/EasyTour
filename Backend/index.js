const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');  // For password hashing
const jwt = require('jsonwebtoken'); // For token-based auth
const UserModel = require('./Models/User');
const dotenv = require('dotenv');

// Load .env file
dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URL)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error("MongoDB Connection Error:", err));

const JWT_SECRET = process.env.JWT_SECRET;

// Health check route (important for testing on Render)
app.get('/', (req, res) => {
  res.send('API is running ✅');
});

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

// Use Render's PORT (or fallback for local dev)
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);
});
