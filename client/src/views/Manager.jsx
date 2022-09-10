import React, { useState, useEffect } from "react"
import AuthorList from "../components/AuthorList"
import axios from "axios"

const Manager = () => {
  const [authors, setAuthors] = useState([])
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/authors")
      .then((response) => {
        setAuthors(response.data)
        setLoaded(true)
      })
      .catch((error) => console.error(error))
  }, [])

  const removeFromDom = (authorId) => {
    setAuthors(authors.filter((p) => p._id != authorId))
  }

  return (
    <div>
      {loaded && (
        <AuthorList
          removeFromDom={removeFromDom}
          authors={authors}
          setAuthors={setAuthors}
        ></AuthorList>
      )}
    </div>
  )
}

export default Manager
