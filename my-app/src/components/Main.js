import React, { useEffect, useState } from "react";

import PageInformation from "./PageInformation";

export default function Main() {
  const [companyList, setCompanyList] = useState([[], null, null, 0]);
  const [page, setPage] = useState(1);
  const limit = 5;

  useEffect(() => {
    getCompanyList();
  }, [page]);

  async function getCompanyList() {
    const response = await fetch(
      `http://localhost:5000/api/v1/companies/get-page?page=${page}&limit=${limit}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const responseJson = await response.json();
    setCompanyList([
      responseJson.results,
      responseJson.next,
      responseJson.previous,
      responseJson.count,
    ]);
  }

  function generateCompanyTableList() {
    return companyList[0].map((companyObject) => (
      <tr>
        <td>{companyObject.cin}</td>
        <td>{companyObject.name}</td>
      </tr>
    ));
  }

  return (
    <>
      <div className="container my-5">
        <div className="table-responsive">
          <table className="table table-borderless align-middle">
            <thead>
              <tr>
                <th>CIN</th>
                <th>NAME</th>
              </tr>
            </thead>
            <tbody className="table-body">{generateCompanyTableList()}</tbody>
          </table>
        </div>
      </div>
      <PageInformation
        count={companyList[3]}
        nextPage={companyList[1]}
        prevPage={companyList[2]}
        page={page}
        limit={limit}
        handlePageChange={(pageNum) => setPage(pageNum)}
      />
    </>
  );
}
