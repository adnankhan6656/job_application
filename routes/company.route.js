const express = require('express');
const { createCompany, getAllCompanies, getCompanyById, updateCompany, deleteCompany } = require('../controller/company.controller');
const router = express.Router();


router.post('/', createCompany);
router.get('/', getAllCompanies);
router.get('/:id', getCompanyById);
router.put('/:id', updateCompany);
router.delete('/:id',deleteCompany);

module.exports = router;
