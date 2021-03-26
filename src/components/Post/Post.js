import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import {  useHistory } from 'react-router-dom';
import {Context} from '../../App'

// import Details from '../Details/Details'

import './Post.css'

const Post = ({ posts, post }) => {
    // const [postData, setPostData] = useState()

    const [searched, setSearched] = useState(false)
    const setPostData = useContext(Context)
    const history = useHistory()



    const handleSearch = async () => {
        const postId = posts.filter(el => el.id === post.id)[0].id
        setSearched(true)

        const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        const data = res.data
        setPostData(data) //no carga la data

        console.log(data)
        history.push('/details')
        console.log('llego')
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
                        <button className="trash-btn">
                            <i className="fas fa-trash"></i>
                        </button>
                    </div>
                    <div className='btn-container'>
                        <button className="edit-btn">
                            <i className="far fa-edit"></i>
                        </button>
                    </div>
                </div>
        )
    

}

export default Post
