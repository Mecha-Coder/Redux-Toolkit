import React from 'react'
import { useDispatch } from 'react-redux'
import { clickReaction } from '../app/postSlice'

function PostReaction({id,reaction}) {
  const {thumbsup, heart, rocket, coffee } = reaction
  const dispatch = useDispatch()

  function handleClick(selector){
    dispatch(clickReaction({id,selector}))
  }

  return (
    <div className="reaction">
      <div onClick={()=>{handleClick(0)}}>👍 {thumbsup}</div>
      <div onClick={()=>{handleClick(1)}}>❤️ {heart}</div>
      <div onClick={()=>{handleClick(2)}}>🚀 {rocket}</div>
      <div onClick={()=>{handleClick(3)}}>☕ {coffee}</div>
    </div>
  )
}

export default PostReaction