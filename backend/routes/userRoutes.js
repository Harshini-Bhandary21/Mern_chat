import express from 'express';
import { registerUser } from '../controllers/userController.js';
const router = express.Router();
import { authUser } from '../controllers/userController.js';
router.route('/').post(registerUser)
router.post('/login', authUser) // /api/user/login
// to handle multiple requests we are writing router.route, we can also use .get, .post and other methods accorind to the use.
// here we have provides this file as a route to /api/user, so any endpoint we are providing in the bracket will be after this endpoint

export default router;