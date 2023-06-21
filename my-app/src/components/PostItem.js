import React from 'react'
import css from './css/PostItem.module.css'

function PostItem(props) {
    const post = props
    return (
        post.savedPosts.map(post => {
            return (
                <div key={post.title} className={css.SearchItem}>
                    <p>{post.title}</p>
                    <p>{post.name}</p>
                    <img src={post.image} alt="Some weird stuff"></img>
                    <p>{post.description}</p>
                </div>
            )
        })
    )
}

export default PostItem