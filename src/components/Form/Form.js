import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import axios from 'axios'

import './Form.css'

const Form = () => {
  const [titlePost, setTitlePost] = useState('')
  const [contentPost, setContentPost] = useState('')




  const handleChangeTitle = (e) => {
    setTitlePost(e.target.value)

  }

  const handleChangeContent = (e) => {
    setContentPost(e.target.value)


  }

  const sendDataToApi = async () => {
    const send = await axios.post('https://jsonplaceholder.typicode.com/posts', { titlePost, contentPost })
    alert('you have send the data')


  }
  const handleSubmit = (e) => {
    e.preventDefault()
    sendDataToApi()
    setTitlePost("")
    setContentPost("")

  }
  return (

    <div className='container-send-post'>
      <h1>SEND POST</h1>
      <form
        onSubmit={handleSubmit}
        className='form'>
        <div>

          <TextField
            value={titlePost}
            onChange={handleChangeTitle}
            required
            variant="filled"
            color="primary"
            label="Title"
          />
        </div>
        <div>
          <TextField
            value={contentPost}
            onChange={handleChangeContent}
            required
            variant="filled"
            color="primary"
            label="Content"
          />
        </div>
        <Button
          color="primary"
          type="submit">
          Send
        </Button>

      </form>
    </div>
  )
}

export default Form
