import React, { Component } from 'react'
import NavBarItem from './navBarComponents/NavBarItem.tsx'
import '../styles/NavBar.scss'
class NavBar extends Component {
  render () {
    return (
      <>
        <div className='NavBar'>
          <div className='NavLeft'>
            <NavBarItem text='garyorsargos.dev'/>
          </div>
          <div className='NavRight'>
            <NavBarItem text='About Me'/>
            <NavBarItem text='Projects'/>
            <NavBarItem text='Experience'/>
          </div>
        </div>
      </>
    )
  }
}

export default NavBar
