import React from 'react'
import moment from "moment"

function PostTimeStamp({time}) {
  return (
    <h4>{moment(time).fromNow()}</h4>
  )
}

export default PostTimeStamp