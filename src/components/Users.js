import React from 'react'
import { useSearchParams } from 'react-router-dom';
const Users = () => {

    const [searchParams,setSearchParams] = useSearchParams()
    const showActiveUsers = searchParams.get("filter")==="active";
    return (
        <div>
            <h1>User 1</h1>
            <h1>User 2</h1>
            <h1>User 3</h1>
            <button onClick={()=>setSearchParams({filter:"active"})}>Active Users</button>
            <button onClick={()=>setSearchParams({})}>Reset Filter</button>
            {showActiveUsers?<h2>Showing Active Users</h2>:<h2>Showing All Users</h2>}
        </div>
    )
}

export default Users;