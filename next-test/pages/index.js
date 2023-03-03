import { test } from "@/src/Context"
import { useContext } from "react"


export default function Home() {

  const {num} = useContext(test)

  console.log(num)
  return (
    <>
      <main>
    
      </main>
    </>
  )
}
