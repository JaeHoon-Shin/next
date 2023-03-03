import Link from 'next/link'
import React from 'react'

const Nav = () => {
  return (
  <header>
    <Link href='/'>메인</Link>
    <Link href='/about'>about</Link>
    <Link href='/board'>board</Link>
  </header>
  
  )
}

export default Nav