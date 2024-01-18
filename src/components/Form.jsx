import React, {useRef} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addPost } from '../app/postSlice'

function Form() {
  const getTitle = useRef()
  const getContent = useRef()
  const getAuthor = useRef()
  const dispatch = useDispatch()
  const user = useSelector(state=>state.user)
  
  const generateAuthor = user.map(user=>
    <option key={user.id} value={user.name}>{user.name}</option>
  )

  function handleSubmit(e){
    e.preventDefault()

    dispatch(addPost(
      getTitle.current.value,
      getContent.current.value,
      getAuthor.current.value
    ))

    getTitle.current.value = ""
    getContent.current.value = ""
    getAuthor.current.value = ""
  }

  return (
    <section>
      <h2>Add a new post</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="input">
          <label  htmlFor='postTitle'>Post Title: </label>
          <input 
            type="text" 
            id="postTitle"
            ref={getTitle}
            required
          />
        </div>
        
        <div className="input">
          <label  htmlFor='postAuthor'>Author: </label>
          <select id="postAuthor" ref={getAuthor} defaultValue="" required>
            <option disabled value=""> -- select author -- </option>
            {generateAuthor}
          </select>
        </div>

        <div className="input">
          <label  htmlFor='postContent'>Content: </label>
          <input 
            type="text" 
            id="postContent"
            ref={getContent}
            required
          />  
        </div>

        <div className="input spread">
          <button type="submit">Save Post</button>
        </div> 

      </form> 

    </section>
   
  )
}

export default Form