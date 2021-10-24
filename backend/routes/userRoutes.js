import express from 'express';
import { getUserProfile, registerUser, userAuth } from '../controller/useController.js';
import { protect } from '../middleware/authMiddleware.js';
const router = express.Router();

router.route('/').post(registerUser)
router.route('/login').post(userAuth);
router.route('/profile').get(protect, getUserProfile)

export default router;


