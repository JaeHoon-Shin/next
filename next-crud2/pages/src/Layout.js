import React from 'react'

//context 같은 느낌???????
const Layout = ({chlidren}) => {
  return (
    <>
        <header></header>
        {chlidren}
        <footer></footer>
    </>
  )
}

export default Layout