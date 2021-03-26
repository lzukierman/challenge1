import React from 'react'

import Post from '../Post/Post'


import './Home.css'

const Home = ({posts}) => {

    return (
        <div className='home-container'>
            <ul className='home-list'>
                {posts.map(post => <Post posts={posts} key={post.id} post={post} />)}
            </ul>
        </div>
    )
}

export default Home



// <div className="todo">
//                 <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{todo.text}</li>
//                 <button onClick={completeHandler} className="complete-btn">
//                     <i className="fas fa-check"></i>
//                 </button>
//                 <button onClick={deleteHandler} className="trash-btn">
//                     <i className="fas fa-trash"></i>
//                 </button>
//             </div>