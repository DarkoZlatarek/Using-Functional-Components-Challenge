import React, { Component } from 'react'
import {savedPosts} from '../posts.json'
import css from './css/Content.module.css'
import PostItem from './PostItem'
import Loader from './Loader'

export class Content extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isLoaded: false
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
}

  render() {
    return (
      <div className={css.Content}>
        <div className={css.TitleBar}>
            <h1>My Photos</h1>
        </div>

        <div className={css.SearchResult}>
            {this.state.isLoaded ? (<PostItem savedPosts={savedPosts}/>) : (<Loader />)}
        </div>
      </div>
    )
  }
}

export default Content