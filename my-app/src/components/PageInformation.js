import React from "react";

export default function PageInformation(props) {
  function decrementPage() {
    if (props.prevPage) {
      props.handlePageChange(props.page - 1);
    }
  }

  function incrementPage() {
    if (props.nextPage) {
      props.handlePageChange(props.page + 1);
    }
  }

  let startId = (props.page - 1) * props.limit + 1;
  let endId = (props.page - 1) * props.limit + props.limit;
  let totalEntries = props.count;

  startId = Math.min(startId, totalEntries);
  endId = Math.min(endId, totalEntries);

  return (
    <div className="container my-2">
      <nav className="navbar">
        <div className="container-fluid">
          <div>
            Showing {startId} to {endId} of {totalEntries} entries
          </div>

          <div className="row align-items-center">
            <div
              className="col disabled"
              style={{ cursor: "pointer" }}
              onClick={decrementPage}
            >
              PREVIOUS
            </div>
            <div className="col page-count mx-3 text-center">
              <p className="py-2 my-0">{props.page}</p>
            </div>
            <div
              className="col disabled"
              style={{ cursor: "pointer" }}
              onClick={incrementPage}
            >
              NEXT
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
