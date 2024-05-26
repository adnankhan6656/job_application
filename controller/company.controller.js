const db=require("../models/index.js");
const Company=db.Company;

// Create a new company
const createCompany = async (req, res) => {
  try {
    const { name, description, website,location } = req.body;
    const company = await Company.create({ name, description, website,location });
    res.status(201).json({ message: 'Company created successfully', company });
  } catch (err) {
    console.error('Error creating company:', err);
    res.status(500).json({ error: 'Error creating company' });
  }
};

// Get all companies
const getAllCompanies = async (req, res) => {
  try {
    const companies = await Company.findAll();
    res.status(200).json(companies);
  } catch (err) {
    console.error('Error fetching companies:', err);
    res.status(500).json({ error: 'Error fetching companies' });
  }
};

// Get a single company by ID
const getCompanyById = async (req, res) => {
  try {
    const { id } = req.params;
    const company = await Company.findByPk(id);
    if (!company) {
      return res.status(404).json({ error: 'Company not found' });
    }
    res.status(200).json(company);
  } catch (err) {
    console.error('Error fetching company:', err);
    res.status(500).json({ error: 'Error fetching company' });
  }
};

// Update a company by ID
const updateCompany = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, website ,location} = req.body;
    const company = await Company.findByPk(id);
    if (!company) {
      return res.status(404).json({ error: 'Company not found' });
    }
    await company.update({ name, description, website,location });
    res.status(200).json({ message: 'Company updated successfully', company });
  } catch (err) {
    console.error('Error updating company:', err);
    res.status(500).json({ error: 'Error updating company' });
  }
};

// Delete a company by ID
const deleteCompany = async (req, res) => {
  try {
    const { id } = req.params;
    const company = await Company.findByPk(id);
    if (!company) {
      return res.status(404).json({ error: 'Company not found' });
    }
    await company.destroy();
    res.status(200).json({ message: 'Company deleted successfully' });
  } catch (err) {
    console.error('Error deleting company:', err);
    res.status(500).json({ error: 'Error deleting company' });
  }
};
module.exports={createCompany,getCompanyById,getAllCompanies,updateCompany,deleteCompany}