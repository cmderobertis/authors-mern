import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import AuthorForm from "../components/AuthorForm"

const Create = (props) => {
  const [errors, setErrors] = useState([])
  const navigate = useNavigate()

  const createAuthor = (author) => {
    axios
      .post("http://localhost:8000/api/authors", author)
      .then((response) => {
        console.log(response.data)
        navigate("/")
      })
      .catch((err) => {
        const errorResponse = err.response.data.errors
        const errorArr = []
        for (const key in errorResponse) {
          errorArr.push(errorResponse[key].message)
        }
        setErrors(errorArr)
      })
  }

  return (
    <div>
      <AuthorForm
        onSubmitProp={createAuthor}
        errors={errors}
        initialName=""
        heading="Create Author"
      ></AuthorForm>
    </div>
  )
}

export default Create
