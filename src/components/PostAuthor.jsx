import React from 'react'

function PostAuthor({user}) {
  return (
    <h4>by {user || "Unknown Author"}</h4>
  )
}

export default PostAuthor
