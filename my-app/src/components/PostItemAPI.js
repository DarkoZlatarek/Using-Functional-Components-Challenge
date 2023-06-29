import React from 'react'
import css from './css/PostItem.module.css'

function PostItemAPI(props) {
    const post = props
    return (
        post.savedPosts.map(post => {
            const { id, type, user, webformatURL, tags } = post;
            return (
                <div key={id} className={css.SearchItem}>
                    <p>{type}</p>
                    <p>{user}</p>
                    <img src={webformatURL} alt="Some weird stuff"></img>
                    <p>{tags}</p>
                </div>
            )
        })
    )
}

export default PostItemAPI