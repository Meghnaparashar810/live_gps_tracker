import express from 'express';
import { location, getLocation } from "../controller/usercontroller.js";    

const router = express.Router();


router.post("/location", location);
router.get("/getlocation/:userId", getLocation);

export default router;



