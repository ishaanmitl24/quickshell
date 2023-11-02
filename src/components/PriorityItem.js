import React from 'react';
import classes from './PriorityItem.module.css';
import PriorityProfile from './PriorityProfile';
import ProfileCard from './ProfileCard';

const PriorityItem = (props) => {
  const item = props.data["tickets"].filter((item)=> item["priority"] === props.priority);  
  return (
    <div className={classes.main}>
       <PriorityProfile length={item.length} priority={props.priority} tickets={props.data["tickets"]} />
       <div className={classes.items}>
       {item.map((data)=>(
                <ProfileCard  key={data.id} user={props.data.users}  data={data} />
            ))}
       </div> 
    </div>
  )
}

export default PriorityItem;