import { useEffect, useState } from 'react'
import './Posts.css'
import Post from './Post'

export default function Posts(){
    const [posts, setPosts] = useState([])
    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data))
    }, [])

    return (
        <div>
            <h1 className='posts'>Posts: {posts.length}</h1>
            {
                posts.map(post => <Post post={post}></Post>)
            }
        </div>
    )
}