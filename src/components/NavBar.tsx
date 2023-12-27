import React, { Component } from 'react'
import NavBarItem from './navBarComponents/NavBarItem.tsx'
import '../styles/NavBar.scss'
class NavBar extends Component {
  render () {
    return (
      <>
        <div className='NavBar'>
          <div className='NavLeft'>
            <NavBarItem/>
          </div>
          <div className='NavRight'>
            <NavBarItem/>
          </div>
        </div>
      </>
    )
  }
}

export default NavBar
