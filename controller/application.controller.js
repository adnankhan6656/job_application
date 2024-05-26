const db=require("../models/index.js");
const Application=db.Application;

const createApplicant=async(req,res)=>{
    try {
        const { user_id, job_id, status } = req.body;
        const application = await Application.create({ user_id, job_id, status });
        res.status(201).json({ message: 'Application created successfully', application });
      } catch (err) {
        console.error('Error creating application:', err);
        res.status(500).json({ error: 'Error creating application' });
      }
};
const getAllApplications=async(req,res)=>{
    try {
        const applications = await Application.findAll({
            attributes:['status','job_id','user_id']
        });
        console.log(applications)
        res.status(200).json(applications);
      } catch (err) {
        console.error('Error fetching applications:', err);
        res.status(500).json({ error: 'Error fetching applications' });
      }
}
const getSingleApplication=async(req,res)=>{
    try {
        let { id } = req.params;
        id=Number(id)
        const application = await Application.findByPk(id);
        if (!application) {
          return res.status(404).json({ error: 'Application not found' });
        }
        res.status(200).json(application);
      } catch (err) {
        console.error('Error fetching application:', err);
        res.status(500).json({ error: 'Error fetching application' });
      }
}
const updateApplication=async(req,res)=>{
    try {
        const { id } = req.params;
        const { status } = req.body;
        const application = await Application.findByPk(id);
        if (!application) {
          return res.status(404).json({ error: 'Application not found' });
        }
        await application.update({ status });
        res.status(200).json({ message: 'Application updated successfully', application });
      } catch (err) {
        console.error('Error updating application:', err);
        res.status(500).json({ error: 'Error updating application' });
      }
}
const deleteApplication=async(req,res)=>{
    try {
        const { id } = req.params;
        const application = await Application.findByPk(id);
        if (!application) {
          return res.status(404).json({ error: 'Application not found' });
        }
        await application.destroy();
        res.status(200).json({ message: 'Application deleted successfully' });
      } catch (err) {
        console.error('Error deleting application:', err);
        res.status(500).json({ error: 'Error deleting application' });
      }
}
module.exports={createApplicant,getAllApplications,getSingleApplication,updateApplication,deleteApplication};