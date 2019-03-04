import React from 'react'

export default function Header() {
  return (
    <header style={headerStyle}>
        <h1>TodoList</h1>
    </header>
  )
}
const headerStyle = {
    color: '#fff',
    padding: '10px',
    textAlign: 'center',
    background: '#333'
}
