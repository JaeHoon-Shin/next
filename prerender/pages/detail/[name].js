import { useRouter } from 'next/router'
import React from 'react'
import axios from 'axios'
const Detail = ({data}) => {
    
    return (
        <div><img src={data[0].url} alt=''></img></div>
    )
}


export default Detail

export async function getStaticPaths() {
    const res = await axios.get(`http://localhost:3000/api`)
    //url에서 같은 값을 찾아줌.. 
    const data = res.data.map(obj =>({ params: { name: obj.name }}))
    return {
        paths: data,
        fallback: true,
    };
}
export async function getStaticProps({params}) {
    
    const res = await axios.get(`http://localhost:3000/api/${params.name}`);
    const data = res.data;
    
    return {
        props: { data }

    }

} 