import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Search from "./components/Search";
import FindCompany from "./components/FindCompany";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Navbar />
              <Search />
              <Main />
            </>
          }
        />
        <Route exact path="/findCompany" element={<FindCompany />} />
      </Routes>
    </>
  );
}

console.log("Himanshu");

export default App;
