import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchData } from '../store/https';
import UserItem from './UserItem';
const UserMain = () => {
    const {data} = useQuery({
        queryKey:['data'],
        queryFn:fetchData
      });  
     console.log(data); 
  return (
    <div className='body'>
        {data && data["users"].map((item)=>(
            <UserItem tickets={data["tickets"]} data={data} user={item} key={item.id}/>
        ))}
    </div>
  )
}

export default UserMain;