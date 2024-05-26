const express=require("express");
const { createJob, getAllJobs, getSingleJob, updateJob, deletejob } = require("../controller/job.controller");
const router=express.Router();



router.post("/",createJob);
router.get("/",getAllJobs);
router.get("/:id",getSingleJob);
router.put("/:id",updateJob);
router.delete("/:id",deletejob)

module.exports=router;