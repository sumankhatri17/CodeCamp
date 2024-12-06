import express from 'express';
import {
    Signup,
    Login,
    Logout,
    userController,
    classController,
    adminController
} from './auth.js';
import {
  Evaluate
}
from './func.js';


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


// Functionaity of our website goes here

// Evaluate a test
router.post('/evaluate', Evaluate);

// student
// Create a class
router.post('/classes', async (req, res) => {
  const { teacherId, classData, location } = req.body;

  try {
    const classId = await classController.createClass(teacherId, classData, location);
    res.status(201).json({ success: true, classId });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Get all classes
router.get('/classes', async (req, res) => {
  try {
    const classes = await classController.getClasses();
    res.status(200).json({ success: true, classes });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Enroll a student in a class
router.post('/classes/:classId/enroll', async (req, res) => {
  const { classId } = req.params;
  const { studentId } = req.body;
  try {
    const result = await classController.enrollStudent(classId, studentId);
    res.status(200).json({ success: true, ...result });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});


// teacher
// Get all classes taught by a teacher
router.get('/teachers/:teacherId/classes', async (req, res) => {
  const { teacherId } = req.params;
  try {
    const classes = await classController.getTeacherClasses(teacherId);
    res.status(200).json({ success: true, classes });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Get all students enrolled in a class
router.get('/classes/:classId/students', async (req, res) => {
  const { classId } = req.params;

  try {
    const students = await classController.getClassStudents(classId);
    res.status(200).json({ success: true, students });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// admin
// Get all classes
router.get('/admin/rm-user', async (req, res) => {
  const { userId } = req.body;
  try {
    const classes = await adminController.removeUser(userId);
    res.status(200).json({ success: true, classes });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Add a subject this will be done by the admin as the demand for the subject increases or if there are more weak students in a particular subject
router.post('/admin/add-subject', async (req, res) => {
  const { subjectData } = req.body;
  try {
    const classes = await adminController.addSubject(subjectData);
    res.status(200).json({ success: true, classes });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// router.get('/student', Student);
// router.get('/teacher', Teacher);
// router.get('/admin', Admin);
router.get('/student/:id', userController.getStudentProfile);
router.get('/teacher/:id', userController.getTeacherProfile);



export { router };
