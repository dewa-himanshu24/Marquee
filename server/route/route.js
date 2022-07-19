const express = require("express");
const {
  getCompanies,
  addCompany,
  getCompaniesPagination,
} = require("../controller/companies");

const { searchCompanies } = require("../controller/customSearch");

const router = express.Router();

// company APIs
router.get("/get-all", getCompanies);
router.get("/get-page", getCompaniesPagination);
router.post("/add-company", addCompany);

// connecting API
router.get("/custom-search", searchCompanies);

module.exports = router;
