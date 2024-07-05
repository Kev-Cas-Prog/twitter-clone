import  express from "express";
import { protectRoute } from "../middleware/protectRoute.js";
import { getUserProfile, followUnfollowUser, getSuggestedUserProfile, updateUser } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/profile/:username",protectRoute, getUserProfile);
router.get("/suggested",protectRoute, getSuggestedUserProfile);
router.post("/follow/:id",protectRoute, followUnfollowUser);
router.post("/update",protectRoute, updateUser);


export default router;