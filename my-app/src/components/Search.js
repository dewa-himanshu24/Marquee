import React from "react";

export default function Search() {
  return (
    <div className="container my-2">
      <nav className="navbar">
        <div className="container-fluid">
          <div className="disabled mx-3">Show entries</div>
          <div className="disabled">Search:</div>
        </div>
      </nav>
      <div>
        <nav className="navbar">
          <div className="container-fluid">
            <div></div>
            <div className="search-container">
              <form>
                <input
                  className="border-bottom border-dark search-bar"
                  type="text"
                  name="search"
                />
              </form>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
