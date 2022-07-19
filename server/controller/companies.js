const Companies = require("../model/company");

const getCompanies = async (req, res) => {
  Companies.findAll()
    .then((data) => {
      console.log(data);
      res.status(200).json(data);
    })
    .catch((err) => {
      console.log(err);
      res
        .status(400)
        .json({ message: "Error while fetching companies CIN and Name" });
    });
};

const getCompaniesPagination = async (req, res) => {
  const page = parseInt(req.query.page);
  const limit = parseInt(req.query.limit);

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const results = {};

  const companyCount = await Companies.count();

  if (endIndex < companyCount) {
    results.next = {
      page: page + 1,
      limit: limit,
    };
  }

  if (startIndex > 0) {
    results.previous = {
      page: page - 1,
      limit: limit,
    };
  }
  results.count = companyCount;
  results.results = await Companies.findAll({
    limit: limit,
    offset: startIndex,
  });
  res.status(200).json(results);
};

const addCompany = async (req, res) => {
  console.log(req.body);
  Companies.create(req.body)
    .then((data) => {
      console.log(data);
      res.status(200).json({ message: `Company: ${req.body.name} is added` });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(400)
        .json({ message: `Error while adding company: ${req.body.name}` });
    });
};

module.exports = {
  getCompanies,
  addCompany,
  getCompaniesPagination,
};
