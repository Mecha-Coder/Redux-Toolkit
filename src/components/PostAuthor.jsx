import React from 'react'
import { useSelector } from 'react-redux'

function PostAuthor({userId}) {
  const {data} = useSelector(state=>state.user)

  const Author = data[userId-1].name

  return (
    <h4>by {Author || "Unknown Author"}</h4>
  )
}

export default PostAuthor
