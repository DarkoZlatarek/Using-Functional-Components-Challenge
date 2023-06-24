import React, { Component } from 'react'
import {savedPosts} from '../posts.json'
import css from './css/Content.module.css'
import PostItem from './PostItem'
import Loader from './Loader'

export class Content extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoaded: false,
      posts: [],
    }
  }

  getData() {
    setTimeout(() => {
      this.setState({
        isLoaded: true,
      })
    }, 2000)
  }

  componentDidMount() {
    this.getData()
    this.setState({
      posts: savedPosts
    })
  }

  handleChange = (event) => {
    const name = event.target.value
    const filteredPosts = posts.filter(post => {
      return post.toLowerCase().includes(name)
    })
    this.setState({
      posts: filteredPosts
  })
  }

  render() {
    return (
      <div className={css.Content}>
        <div className={css.TitleBar}>
          <h1>My Photos</h1>
          <form>
            <label htmlFor='searchInput'>Search:</label>
            <input
              id='searchInput'
              type='search'
              onChange={(event) => this.handleChange(event)}
            />
            <h4>posts found: {this.state.posts.length}</h4>
          </form>
        </div>

        <div className={css.SearchResult}>
          {this.state.isLoaded ? (<PostItem savedPosts={this.state.posts} />) : (<Loader />)}
        </div>
      </div>
    )
  }
}

export default Content
