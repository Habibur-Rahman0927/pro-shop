import express from 'express';
import { getUserProfile, getUsers, registerUser, updataUserProfile, userAuth } from '../controller/useController.js';
import { admin, protect } from '../middleware/authMiddleware.js';
const router = express.Router();

router.route('/').post(registerUser).get(protect, admin, getUsers)
router.route('/login').post(userAuth);
router.route('/profile').get(protect, getUserProfile).put(protect, updataUserProfile)

export default router;


