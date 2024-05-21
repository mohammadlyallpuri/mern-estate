import express from 'express';
import { test } from '../controllers/user.controller.js';

const router = express.Router();

// Define the /test route
router.get('/test',test)
// Export the router
export default router;
