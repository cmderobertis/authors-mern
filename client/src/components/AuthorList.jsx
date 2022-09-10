import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import DeleteButton from "./DeleteButton"

const AuthorList = ({ authors, setAuthors, removeFromDom }) => {
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/authors")
      .then((response) => setAuthors(response.data))
  }, [])

  return (
    <div className="card m-3">
      <div className="card-body">
        <h4>Authors</h4>
        <div className="card bg-light">
          <div className="card-body pt-0">
            {authors.map((author) => {
              return (
                <div
                  key={author._id}
                  className="row justify-content-between align-items-center mt-3"
                >
                  <div className="col text-start">
                    <p className="text-primary m-0 h5">{author.name}</p>
                  </div>
                  <div className="col-3">
                    <Link
                      to={"./authors/" + author._id + "/edit"}
                      className="btn btn-success"
                    >
                      Edit
                    </Link>
                  </div>
                  <div className="col-3">
                    <DeleteButton
                      authorId={author._id}
                      successCallback={() => removeFromDom(author._id)}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthorList
