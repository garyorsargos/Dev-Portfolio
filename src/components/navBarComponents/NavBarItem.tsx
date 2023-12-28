import React, { Component } from 'react'

interface Props {
  text: string;
}

const NavBarItem = ({text}: Props) => {
  return (
      <div>
        {text}
      </div>
  )
}

export default NavBarItem
