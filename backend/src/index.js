import express from 'express';
import { router } from './app/router.js';
const app = express();

const PORT = process.env.PORT || 8000;

// Middleware
app.use(express.json());
app.use('/',router);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
