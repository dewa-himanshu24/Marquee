const fetch = require("node-fetch");

async function searchCompanies(req, res) {
  const { searchParam } = req.query;
  const search = `search=${searchParam}&filter=company`;
  const response = await fetch("https://www.zaubacorp.com/custom-search", {
    method: "POST",
    body: search,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });

  const responseText = await response.text();
  return res.send(responseText);
}

module.exports = { searchCompanies };
