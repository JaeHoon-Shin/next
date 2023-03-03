import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useState } from 'react'

const Write = () => {
    const router = useRouter();
    const initial = { name: '', email: '' ,date : ''}
    const [inputValue, setValue] = useState(initial);
    function valueChange(e) {
        let t = e.target;
        setValue((obj) => {
            return { ...obj, [t.name]: t.value }
        })
    }

    function create(e) {
        e.preventDefault();
        // get, post, put, delete
        axios.post('/api/', { ...inputValue, date: Date.now().toString()})
        router.push('/');
    }
    return (
        <div>
            <form onSubmit={create}>
                <p><input onChange={valueChange} type="text" placeholder='이름' name="name" /></p>
                <p><input onChange={valueChange} type="email" placeholder='메일' name="email" /></p>
                
                <p><input type="submit" value="저장" /></p>
            </form>
        </div>
    )
}

export default Write