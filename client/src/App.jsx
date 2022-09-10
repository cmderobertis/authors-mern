import React from "react"
import { Routes, Route, NavLink } from "react-router-dom"
import Manager from "./views/Manager"
import Create from "./views/Create"
import Update from "./views/Update"

function App() {
  return (
    <div className="row justify-content-center">
      <div className="col-lg-6 col-md-8 col-sm-10 text-center">
        <h1>Favorite Authors</h1>
        <div className="row">
          <div className="col">
            <NavLink
              className={({ isActive }) =>
                isActive ? "btn btn-primary active" : "btn btn-light"
              }
              to={"/"}
            >
              View Authors
            </NavLink>
          </div>
          <div className="col">
            <NavLink
              className={({ isActive }) =>
                isActive ? "btn btn-primary" : "btn btn-light"
              }
              to={"/new"}
            >
              Add an author
            </NavLink>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Manager />} />
          <Route path="/new" element={<Create />} />
          <Route path="/authors/:id/edit" element={<Update />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
