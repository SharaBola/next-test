import {useEffect, useState} from 'react';
import Link from "next/link";
import MainContainer from "../componenets/MainContainer";
const Users = () => {
    const [users, setUsers] = useState([
        {id:1,name:"Next"},
        {id:2,name:"Nuxt"},
    ])
    // useEffect(async () => {
    //     const response = await fetch('https://jsonplaceholder.typicode.com/users')
    //     const data = await response.json()
    //     setUsers(data)
    // }, [])
    useEffect(() => {
        async function getData() {
            try {
                const res = await fetch('https://jsonplaceholder.typicode.com/users');
                if (!res.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await res.json();
                setUsers(data);
            } catch (error) {
                console.error(error);
            }
        }
        getData();
    }, []);

    return (
        <MainContainer>

            <h1>Страница с пользователями</h1>
            <ul>
                {users.map(user=>
                    <li key={user.id}>
                        <Link href={`/users/${user.id}`}>
                            {user.name}
                        </Link>

                    </li>
                )}
            </ul>

        </MainContainer>
    );
};

export default Users;
