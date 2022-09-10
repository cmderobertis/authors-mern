import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

const AuthorForm = ({ initialName, onSubmitProp, heading, errors }) => {
  const [name, setName] = useState(initialName)
  const navigate = useNavigate()

  const onSubmitHandler = (e) => {
    e.preventDefault()
    onSubmitProp({ name })
  }

  return (
    <div className="card m-3">
      <div className="card-body">
        <h4>{heading}</h4>
        <div className="card bg-light">
          <div className="card-body">
            <form onSubmit={onSubmitHandler}>
              {errors.map((err, idx) => (
                <p key={idx} className="text-danger">
                  {err}
                </p>
              ))}
              <p>
                <label htmlFor="name">Name</label>
                <br />
                <input
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
              </p>
              <button
                className="btn btn-dark me-3"
                onClick={() => navigate("/")}
              >
                Cancel
              </button>
              <input className="btn btn-success" type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthorForm
