import { useSelector } from "react-redux"
import PostAuthor from "./PostAuthor"
import PostTimeStamp from "./PostTimeStamp"
import PostReaction from  "./PostReaction"

import React from 'react'

function List() {
  const post = useSelector(state=>state.post)

  //Sort by latest post
  const list = post.slice()
  list.sort((a,b)=> b.timestamp - a.timestamp)

  const renderlist = list.map(item=>(
    <article key={item.id}>
      <h3>{item.title}</h3>
      <p>{item.content.substring(0,100)}</p>
      <PostAuthor user={item.user}/>
      <PostTimeStamp time={item.timestamp} />
      <PostReaction id={item.id} reaction={item.reaction} />
    </article>
  ))

  return (
    <section>
      <h2>Posts</h2>
      {renderlist}
    </section>
  )
}

export default List