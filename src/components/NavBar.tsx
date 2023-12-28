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
            <NavBarItem text='About Me' href=''/>
            <NavBarItem text='Projects' href=''/>
            <NavBarItem text='Experience' href=''/>
          </div>
        </div>
      </>
    )
  }
}

export default NavBar
