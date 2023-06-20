import React, { Component } from 'react'
import css from "./css/NavBarForm.module.css"
import NavBarChild from './NavBarChild'

export class NavBarForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        isLoggedIn: true,
      }
    }

    handleClick = () => {
        this.setState((prevState, prevProps) => {
            console.log("Previous state:", prevState);
            console.log("Previous props:", prevProps);
            return {
                isLoggedIn: prevState.isLoggedIn === true ? false : true,
            }
        })
    }

  render() {
    return (
      <div className={css.NavBar}>
        <h1>My Gallery</h1>
        {this.state.isLoggedIn ? (
        <button onClick={this.handleClick}>Login</button>
        ) : (
            <NavBarChild />
        )
        }
      </div>
    )
  }
}

export default NavBarForm