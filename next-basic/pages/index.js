import { useRouter } from "next/router"

export default function Home() {
  const {query} = useRouter();
  console.log(query.id)
  return (
    <>


      <main>
      <div>home</div>
      </main>
    </>
  )
}
