import express from 'express';
import { deleteUser, test, updateUser } from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js'; // Adjusted path

const router = express.Router();

// Define the /test route
router.get('/test', test);

// Define the /update/:id route with token verification
router.post('/update/:id', verifyToken, updateUser);
router.delete('/delete/:id',verifyToken,deleteUser)

// Export the router
export default router;
