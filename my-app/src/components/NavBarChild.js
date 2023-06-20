import React, { Component } from 'react'

export class NavBarChild extends Component {
  render() {
    return (
        <div>
            <form>
                <label for="username">Username:</label>
                <input type="text" id="username" name="username"></input>
                <label for="password">Password:</label>
                <input type="text" id="password" name="password"></input>
                <input onClick={this.handleClick} type="submit" value="Submit"></input>
            </form>
        </div>
    )
  }
}

export default NavBarChild