import React, { useContext } from 'react'
import { Context } from '../../App'

import './Details.css'
const Details = () => {
    const { postData } = useContext(Context)

    
    const dataArray = Object.entries(postData)
    return (
        <ul>
            {dataArray.map(post => <h1 className='post-data' key={post[0][0]}>{post[0]} : {post[1]}</h1>)}
        </ul>
    )
}

export default Details