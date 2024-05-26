const db=require("../models/index.js");
const Job=db.Job;
const Company=db.Company;
const Skills=db.Skills;
const JobSkills=db.JobSkills;
const createJob=async(req,res)=>{
    try{
     const {title,description,salary,company_id,skills}=req.body;
     let jobCreate={
        title,
        description,
        salary,
        company_id,
        skills
     };
    const job=await Job.create(jobCreate);
    if(skills && skills.length>0){
        for(let skillId of skills){
            await JobSkills.create(
                {
                    job_id:job.id,
                    skill_id:skillId
                }
            )
        }
    }
    }
    catch(error){

    }
}
const getAllJobs=async(req,res)=>{
    try{
        // here we are finding job with skills re   uired and which company has post it
        const jobs = await Job.findAll({
            include: [{
              model: Company
            },{
                model:Skills,
                through:{
                    model:JobSkills
                }
            }]
          });
          res.status(200).json(jobs);
    }
    catch(error){
        console.log(error)
    }
}
const getSingleJob=async(req,res)=>{
try {
    const { id } = req.params;
    const job = await Job.findByPk(id, {
      include: [{
        model: Skills,
        through: {
          model:JobSkills, // exclude the join table attributes
        }
      }]
    });
    if (!job) {
      return res.status(404).json({ error: 'Job not found' });
    }
    res.status(200).json(job);
} catch (error) {
    
}
}
const updateJob=async(req,res)=>{
    try {
        const{id}=req.params;
        console.log(id)
        const {title,description,salary,company_id,skills}=req.body;
        let jobCreate={
           title,
           description,
           salary,
           company_id,
           skills
        };

        const job = await Job.findByPk(id, {
            include: [{ model: Skills,through:{model:JobSkills} }]
          });

    // Update the job
    // await job.update(jobCreate);
 
    const existingSkillIds = job.Skills.map(skill => skill.id);
    console.log(existingSkillIds);  
 // Handle skill associations if provided
 if (skills && skills.length > 0) {
    // Determine skills to add and skills to remove
    const skillsToAdd = skills.filter(skillId => !existingSkillIds.includes(skillId));
    const skillsToRemove = existingSkillIds.filter(skillId => !skills.includes(skillId));

    // Remove old skills
    if (skillsToRemove.length > 0) {
      await JobSkills.destroy({
        where: { job_id: id, skill_id: skillsToRemove }
      });
    }

    // Add new skills
    if (skillsToAdd.length > 0) {
      for (const skillId of skillsToAdd) {
        await JobSkills.create({
          job_id: id,
          skill_id:skillId,
        });
      }
    }
  }

  res.status(200).json({ message: 'Job updated successfully', existingSkillIds });
    } catch (error) {
        
    }
}
const deletejob=async(req,res)=>{
    try {
        const { id } = req.params;

        const job = await Job.findByPk(id);
        if (!job) {
          return res.status(404).json({ error: 'Job not found' });
        }
    
        await JobSkills.destroy({
          where: { job_id: id },
        });
    
        await job.destroy();
    
        res.status(200).json({ message: 'Job deleted successfully' });
    } catch (error) {
        
    }
}
module.exports={createJob,getAllJobs,getSingleJob,updateJob,deletejob}