import React from 'react'
import PostAuthor from "./PostAuthor"
import PostTimeStamp from "./PostTimeStamp"
import PostReaction from  "./PostReaction"

function Post({post}) {
  //Sort by latest post
  const list = post.slice()
  list.sort((a,b)=> a.timestamp - b.timestamp)

  const renderlist = list.map(item=>(
    <article key={item.id}>
      <h3>{item.title}</h3>
      <p>{item.body.substring(0,100)}</p>
      <PostAuthor userId={item.userId}/>
      <PostTimeStamp time={item.timestamp} />
      <PostReaction id={item.id} reaction={item.reaction} />
    </article>
  ))
  
  return <>{renderlist}</>
  
}

export default Post