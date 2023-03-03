import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Link from 'next/link';
const List = () => {


    const [data, setData] = useState([]);

    useEffect(() => {
        dataGet();
    }, [])


    const dataGet = () => {
        axios.get('/api/').then((res) => {
            setData(res.data)
        })
    }

    function deleteData(id) {
        axios.delete(`/api/${id}`).then(res =>{
            dataGet();
        });
       
        // window.location.reload();
    }

    if (!data.length) {
        return <><p>데이터 없음</p>
            <Link href="/src/Write">추가하기</Link>
        </>
    }
    else {
        return (
            <div>
                <ul>{
                    data && data.map((obj, key) => {
                        return <li key={obj.id}> {obj.id}  /  {obj.name}  /  {obj.email}  /  {obj.date}  / <button>수정</button><button onClick={() => deleteData(obj.id)}>삭제</button> </li>
                    })
                }
                </ul>
                <Link href="/src/Write">추가하기</Link>
            </div>

        )
    }

}

export default List