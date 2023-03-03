
import React, { Children, createContext, useState } from 'react'


export const test = createContext(null)


const Context = ({children}) => {


    const [num,setNum] = useState(1);

    const plus =()=>{
        setNum(num+1)
    }


  return (
    <test.Provider value = {{num,plus}} >
    {children}
    </test.Provider>
  )




}

export default Context