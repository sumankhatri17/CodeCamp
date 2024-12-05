import admin from 'firebase-admin';

// Validate email and password
const validateCredentials = (email, password) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return {
    isValid: emailRegex.test(email) && password.length >= 6,
    errors: {
      email: !emailRegex.test(email) ? 'Invalid email format' : '',
      password: password.length < 6 ? 'Password must be at least 6 characters' : ''
    }
  };
};

const Signup = async (req, res) => {
  const { email, password, role } = req.body;

  // Validate input
  const validation = validateCredentials(email, password);
  if (!validation.isValid) {
    return res.status(400).json({ 
      message: 'Invalid credentials', 
      errors: validation.errors 
    });
  }

  try {
    // Create user in Firebase Authentication
    const userRecord = await admin.auth().createUser({
      email,
      password,
    });

    // Create corresponding user profile in Firestore
    await admin.firestore().collection('users').doc(userRecord.uid).set({
      email,
      role: role || 'student', // Default to student if no role specified
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      active: true
    });

    res.status(201).json({
      message: 'User created successfully',
      uid: userRecord.uid,
    });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ 
      message: "Error creating user", 
      error: error.message || 'Unknown error'
    });
  }
};

const Login = async (req, res) => {
  const { idToken } = req.body;
  
  try {
    // Verify ID token
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    
    // Additional check to ensure user is active
    const userDoc = await admin.firestore()
      .collection('users')
      .doc(decodedToken.uid)
      .get();

    if (!userDoc.exists || !userDoc.data()?.active) {
      return res.status(403).json({ message: "User account is inactive or deleted" });
    }

    res.status(200).json({
      message: 'User authenticated successfully',
      uid: decodedToken.uid,
      role: userDoc.data()?.role
    });
  } catch (error) {
    console.error("Error signing in user:", error);
    res.status(401).json({ message: "Invalid credentials or token" });
  }
};

const Verify = async (req, res) => {
  const { idToken } = req.body;
  
  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    
    // Fetch additional user info
    const userDoc = await admin.firestore()
      .collection('users')
      .doc(decodedToken.uid)
      .get();

    res.status(200).json({
      message: 'Token verified successfully',
      uid: decodedToken.uid,
      role: userDoc.data()?.role
    });
  } catch (error) {
    console.error("Error verifying token:", error);
    res.status(401).json({ message: "Invalid or expired token" });
  }
};

const Logout = async (req, res) => {
  const { uid } = req.body;

  try {
    // Revoke refresh tokens
    await admin.auth().revokeRefreshTokens(uid);
    
    // Optional: Update user's last logout time
    await admin.firestore()
      .collection('users')
      .doc(uid)
      .update({
        lastLogout: admin.firestore.FieldValue.serverTimestamp()
      });

    res.status(200).json({ message: 'User logged out successfully' });
  } catch (error) {
    console.error("Error logging out user:", error);
    res.status(500).json({ message: "Error logging out user" });
  }
};

// User Authentication and Profile Management
const userController = {  
    async createStudentProfile(userId, profileData) {
      try {
        await admin.firestore()
          .collection(collections.studentProfiles)
          .doc(userId)
          .set({
            userId,
            classesEnrolled: [],
            marksheet: {},
            goals: {},
            ...profileData
          });
      } catch (error) {
        console.error('Student profile creation error:', error);
        throw error;
      }
    },
  
    async createTeacherProfile(userId, profileData) {
      try {
        await admin.firestore()
          .collection(collections.teacherProfiles)
          .doc(userId)
          .set({
            userId,
            classesTeaching: [],
            subjects: [],
            ...profileData
          });
      } catch (error) {
        console.error('Teacher profile creation error:', error);
        throw error;
      }
    }
  };
  
  // Class Management
  const classController = {
    async createClass(teacherId, classData) {
      try {
        const classRef = await admin.firestore()
          .collection(collections.classes)
          .add({
            teacherId,
            students: [],
            maxStudents: 30,
            currentStudents: 0,
            createdAt: admin.firestore.FieldValue.serverTimestamp(),
            ...classData
          });
  
        // Update teacher's teaching classes
        await admin.firestore()
          .collection(collections.teacherProfiles)
          .doc(teacherId)
          .update({
            classesTeaching: admin.firestore.FieldValue.arrayUnion(classRef.id)
          });
  
        return classRef.id;
      } catch (error) {
        console.error('Class creation error:', error);
        throw error;
      }
    },
  
    async enrollStudent(classId, studentId) {
      try {
        const classRef = admin.firestore().collection(collections.classes).doc(classId);
        const studentProfileRef = admin.firestore().collection(collections.studentProfiles).doc(studentId);
  
        return admin.firestore().runTransaction(async (transaction) => {
          const classDoc = await transaction.get(classRef);
          
          if (classDoc.data().currentStudents >= classDoc.data().maxStudents) {
            throw new Error('Class is full');
          }
  
          transaction.update(classRef, {
            students: admin.firestore.FieldValue.arrayUnion(studentId),
            currentStudents: admin.firestore.FieldValue.increment(1)
          });
  
          transaction.update(studentProfileRef, {
            classesEnrolled: admin.firestore.FieldValue.arrayUnion(classId)
          });
  
          return { success: true };
        });
      } catch (error) {
        console.error('Student enrollment error:', error);
        throw error;
      }
    }
  };

  // Admin Management
const adminController = {
    async addSubject(subjectData) {
      try {
        const subjectRef = await admin.firestore()
          .collection(collections.subjects)
          .add(subjectData);
        return subjectRef.id;
      } catch (error) {
        console.error('Subject creation error:', error);
        throw error;
      }
    },
  
    async removeUser(userId) {
      try {
        // Remove from authentication
        await admin.auth().deleteUser(userId);
  
        // Remove Firestore documents
        await Promise.all([
          admin.firestore().collection(collections.users).doc(userId).delete(),
          admin.firestore().collection(collections.studentProfiles).doc(userId).delete(),
          admin.firestore().collection(collections.teacherProfiles).doc(userId).delete()
        ]);
      } catch (error) {
        console.error('User removal error:', error);
        throw error;
      }
    }
  };

export { Signup, Login, Logout, Verify, userController, classController, adminController };