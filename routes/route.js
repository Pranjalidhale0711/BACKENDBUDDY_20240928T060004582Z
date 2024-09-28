const express = require("express");
const router = express.Router();

// auth routes
const { register, login } = require("../controllers/auth");
const { checkAuthorizationHeaders, authorizeUser } = require("../middlewares/authenticate");


router.post("/register", register);
router.post("/login", checkAuthorizationHeaders, login);

    
// StudentDetails routes
const { createStudentDetails, updateStudentDetails, deleteStudentDetails, getStudentDetails, getAllStudentDetails } = require('../controllers/studentdetails');
// 
router.post("/studentdetails/create", checkAuthorizationHeaders,authorizeUser("createStudentDetails") ,createStudentDetails);
router.put("/studentdetails/update/:id", checkAuthorizationHeaders,authorizeUser("updateStudentDetails"), updateStudentDetails);
router.delete("/studentdetails/delete/:id", checkAuthorizationHeaders, authorizeUser("deleteStudentDetails"), deleteStudentDetails);
router.get("/studentdetails/get/:id", checkAuthorizationHeaders, authorizeUser("readStudentDetails"), getStudentDetails);
router.get("/studentdetails/getAll", checkAuthorizationHeaders, authorizeUser("readStudentDetails"), getAllStudentDetails);

  
module.exports = router;
