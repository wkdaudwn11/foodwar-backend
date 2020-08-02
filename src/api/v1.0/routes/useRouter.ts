import express from "express";
const router = express.Router();
const userController = require("../controllers/userController");

/**
 * @route  POST api/v1.0/user/test
 * @desc   test
 * @access Public
 */
router.route("/test").post(userController.test);

export default router;
