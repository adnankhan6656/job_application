const express=require("express");
const { createApplicant, getAllApplications, getSingleApplication, updateApplication, deleteApplication} = require("../controller/application.controller");
const router=express.Router();

router.post("/",createApplicant);
router.get("/",getAllApplications);
router.get("/:id",getSingleApplication);
router.put("/:id",updateApplication);
router.delete("/:id",deleteApplication)

module.exports=router;