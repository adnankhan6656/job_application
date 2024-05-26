const db=require("../models/index.js");
const Skills=db.Skills;
const createSkill = async (req, res) => {
  try {
    const { name, description } = req.body;
    const skill = await Skill.create({ name, description });
    res.status(201).json({ message: 'Skill created successfully', skill });
  } catch (err) {
    console.error('Error creating skill:', err);
    res.status(500).json({ error: 'Error creating skill' });
  }
};

// Get all skills
const getAllSkills = async (req, res) => {
  try {
    const skills = await Skill.findAll();
    res.status(200).json(skills);
  } catch (err) {
    console.error('Error fetching skills:', err);
    res.status(500).json({ error: 'Error fetching skills' });
  }
};

// Get a single skill by ID
const getSkillById = async (req, res) => {
  try {
    const { id } = req.params;
    const skill = await Skill.findByPk(id);
    if (!skill) {
      return res.status(404).json({ error: 'Skill not found' });
    }
    res.status(200).json(skill);
  } catch (err) {
    console.error('Error fetching skill:', err);
    res.status(500).json({ error: 'Error fetching skill' });
  }
};

// Update a skill by ID
const updateSkill = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;
    const skill = await Skill.findByPk(id);
    if (!skill) {
      return res.status(404).json({ error: 'Skill not found' });
    }
    await skill.update({ name, description });
    res.status(200).json({ message: 'Skill updated successfully', skill });
  } catch (err) {
    console.error('Error updating skill:', err);
    res.status(500).json({ error: 'Error updating skill' });
  }
};

// Delete a skill by ID
const deleteSkill = async (req, res) => {
  try {
    const { id } = req.params;
    const skill = await Skill.findByPk(id);
    if (!skill) {
      return res.status(404).json({ error: 'Skill not found' });
    }
    await skill.destroy();
    res.status(200).json({ message: 'Skill deleted successfully' });
  } catch (err) {
    console.error('Error deleting skill:', err);
    res.status(500).json({ error: 'Error deleting skill' });
  }
};


module.exports={createSkill,updateSkill,getAllSkills,getSkillById,deleteSkill}