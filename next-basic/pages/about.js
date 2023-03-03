import { useRouter } from 'next/router'
import React from 'react'
import about from '../styles/about.module.scss'

const About = () => {
    const router = useRouter();
    function move() 
    {
        //router.push('/')
        router.push({
            pathname :'/',
            query : {id :'aaaa'}
        })
        
    }
  return (
    <div className={about.list}>about
        <button onClick={move}></button>
    </div>
  )
}

export default About