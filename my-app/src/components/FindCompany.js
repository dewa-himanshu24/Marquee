import React , { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


export default function FindCompany() {
  let navigate = useNavigate();
  const [searchString, setSearchString] = useState('')
  const [searchResult, setSearchResult] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState(null);


  async function submitCompany(event) {
    if (selectedCompany) {
      const response = fetch('http://localhost:5000/api/v1/companies/add-company', {
        method: "POST",
        body: JSON.stringify(selectedCompany),
        headers: {
          'Content-Type' : 'application/json'
        }
      });
      const responseJson = await response;
      console.log(responseJson);

      navigate("/", { replace: true });
    }
  }
  
  const handleChange = (e) => {
    e.preventDefault()
    setSearchString(e.target.value)
  }

	useEffect(() => {
    if (searchString) handleSearchString()
  }, [searchString])


  async function handleSearchString() {
    const data = await fetch(`http://localhost:5000/api/v1/companies/custom-search?searchParam=${searchString}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    })
    const responseText = await data.text();

    const companiesData = [];
    const responseElements = responseText.split('</div>');
    for (let i=0; i<responseElements.length-1; i++) {
      const companyData = {};
      companyData.name = responseElements[i].split('id="company/')[1].split('/')[0];
      companyData.cin = responseElements[i].split('id="company/')[1].split('/')[1].split('"')[0];
      console.log(companyData);
      companiesData.push(companyData);
    }
    setSearchResult(companiesData);
  }

function generateDatalistOption() {
  return searchResult.map(item => <p style={{cursor: "pointer"}} onClick={(e) => {
    console.log("This is from 46",e);
    setSelectedCompany(item)
    setSearchString(item.name)
  }}>{item.name}</p>);
}

  return (
    <div className="container">
      <input
        value={searchString}
        id="exampleDataList"
        className="border-bottom border-dark search-bar my-3 .d-inline-flex"
        type="text"
        onChange={(e) => handleChange(e)}
      />
      <div id="datalistOptions">
        {generateDatalistOption()}
      </div>

      <div>
          <button type="button"  onClick={submitCompany} className="btn-company shadow">
            SUBMIT
          </button>
      </div>
    </div>
  );
}
