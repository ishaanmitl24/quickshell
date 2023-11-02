import React from 'react';
import classes from './UserItem.module.css';
import UserProfile from './UserProfile';
import ProfileCard from './ProfileCard';

const UserItem = (props) => {
    const item = props.tickets.filter((item)=> item.userId === props.user.id);
  return (
    <div className={classes.main}>
        <UserProfile length={item.length} tickets={props.tickets} user={props.user} />
        <div className={classes.items}>
        {item.map((data)=>(
                <ProfileCard  key={data.id} user={props.data.users}  data={data} />
            ))}
        </div>
    </div>
  )
}

export default UserItem