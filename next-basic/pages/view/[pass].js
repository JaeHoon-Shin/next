
import { useRouter } from 'next/router'
import React from 'react'

const Test = () => {
    const router = useRouter();

    console.log(router.query.pass)
  return (
    <div>파라미터값을 받아서 처리</div>
  )
}

export default Test;