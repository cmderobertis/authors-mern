import React, { useEffect, useState } from "react"
import axios from "axios"
import { useParams, useNavigate } from "react-router-dom"
import AuthorForm from "../components/AuthorForm"
import DeleteButton from "../components/DeleteButton"

const Update = (props) => {
  const [author, setAuthor] = useState({})
  const [loaded, setLoaded] = useState(false)
  const navigate = useNavigate()
  const { id } = useParams()
  const [errors, setErrors] = useState([])

  useEffect(() => {
    axios.get("http://localhost:8000/api/authors/" + id).then((response) => {
      setAuthor(response.data)
      setLoaded(true)
    })
  }, [])

  const updateAuthor = (author) => {
    axios
      .put("http://localhost:8000/api/authors/" + id, author)
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
      {loaded && (
        <>
          <AuthorForm
            onSubmitProp={updateAuthor}
            initialName={author.name}
            heading="Update Author"
            errors={errors}
          />
          <p></p>
          <DeleteButton
            authorId={author._id}
            successCallback={() => navigate("/")}
          />
        </>
      )}
    </div>
  )
}

export default Update
