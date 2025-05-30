import express from "express";
import { userLogin, userRegister, userLogout } from "../controllers/user.controller.js";

const router = express.Router();

// Health check endpoint
router.get('/health', (req, res) => {
  res.status(200).json({ 
    status: 'success', 
    message: 'User API is working' 
  });
});

router.post("/register", userRegister);
router.post("/login", userLogin);
router.post("/logout", userLogout);

export default router;
