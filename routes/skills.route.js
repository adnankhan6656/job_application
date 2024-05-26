const express=require("express");
const { getAllSkills, createSkill, getSkillById, updateSkill, deleteSkill } = require("../controller/skills.controller");
const router=express.Router();

router.get("/",getAllSkills);
router.post("/",createSkill);
router.get("/:id",getSkillById);
router.put("/:id",updateSkill);
router.delete("/:id",deleteSkill);
module.exports=router;