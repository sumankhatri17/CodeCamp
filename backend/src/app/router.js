import express from 'express';
import {
    Signup,
    Login,
    Logout,
} from './auth.js';
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to the homepage!');
});

router.get('/about', (req, res) => {
  res.send('This is the about page.');
});

router.get('/contact', (req, res) => {
  res.send('Contact us at contact@example.com');
});

// Basic Authentication
router.post('/login', Login);
router.post('/signup', Signup);
router.get('/logout', Logout);


// Functionaity of our app goes here
// router.get('/student', Student);
// router.get('/teacher', Teacher);
// router.get('/admin', Admin);
// router.get('/student/:id', Student);
// router.get('/teacher/:id', Teacher);
// router.post('class', Class);
// router.post('location/:classId', Location);



export { router };
