import { useRouter } from 'next/router'
import React from 'react'

const about = () => {
    const router = useRouter();
    function move(){
        router.push('board')
    }
  return (
    <div>about
        <button onClick={move}></button>

    </div>
  )
}

export default about