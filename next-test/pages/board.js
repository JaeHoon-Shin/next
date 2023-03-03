import { test } from '@/src/Context'
import React, { useContext } from 'react'

const board = () => {


    const {num,plus} = useContext(test);

  return (
    <div>{num}
    <button onClick={plus}>+</button></div>
  )
}

export default board