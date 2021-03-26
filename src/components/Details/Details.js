import React, {useContext} from 'react'
import {Context} from '../../App'

const Details = () => {
    const {postData} = useContext(Context)

console.log(postData)
    return (
        <div>
           {postData}
        </div>
    )
}

export default Details