import React, { Component } from 'react';
import axios from 'axios';
import API_KEY from '../secrets';
import css from './css/Content.module.css'
import PostItemAPI from './PostItemAPI';
import Loader from './Loader'

export class ContentAPI extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoaded: false,
      posts: [],
      savedPosts: [],
    }
  }

  componentDidMount() {
    this.fetchImages()
  }

  async fetchImages() {
    const response = await axios.get('https://pixabay.com/api/?key=${37979309-8b0e2dc7e9d98d902cef5f0bd}&per_page=100');
    const fetchedPosts = response.data.hits;

    this.setState({
      isLoaded: true,
      posts: fetchedPosts,
      savedPosts: fetchedPosts,
    })
  }

  handleChange = (event) => {
    const name = event.target.value.toLowerCase()
    const filteredPosts = this.state.savedPosts.filter((post) => {
      return post.user.toLowerCase().includes(name)
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
          {this.state.isLoaded ? (<PostItemAPI savedPosts={this.state.posts} />) : (<Loader />)}
        </div>
      </div>
    )
  }
}

export default ContentAPI
