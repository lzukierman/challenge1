import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import {  useHistory } from 'react-router-dom';
import {Context} from '../../App'

// import Details from '../Details/Details'

import './Post.css'

const Post = ({ posts, post }) => {
    // const [postData, setPostData] = useState()

    const {setPostData, setPosts} = useContext(Context)
    const history = useHistory()


    const handleSearch = async () => {
        const postId = posts.filter(el => el.id === post.id)[0].id

        const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        const data =  res.data
        setPostData(data)
        history.push('/details')
    }


    const handleDelete = async () => {
        const postId = posts.filter(el => el.id === post.id)[0].id
        const deletePost = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        setPosts(posts.filter(el => el.id !== post.id))
        alert('Post eliminado')

    }


    const handleEdit = async () => {
        const postId = posts.filter(el => el.id === post.id)[0].id
        const res = await axios.put(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        return res
    }
    
    

        return (
    
                <div className='home-list-container'>
                    <li className='home-posts' > {post.title}</li>
                    <div className='btn-container'>
                        <button onClick={handleSearch} className="search-btn">
                            <i className="fab fa-searchengin"></i>
                        </button>
                    </div>
                    <div className='btn-container'>
                        <button onClick={handleDelete} className="trash-btn">
                            <i className="fas fa-trash"></i>
                        </button>
                    </div>
                    <div className='btn-container'>
                        <button onClick={handleEdit} className="edit-btn">
                            <i className="far fa-edit"></i>
                        </button>
                    </div>
                </div>
        )
    

}

export default Post
