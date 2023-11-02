import React from 'react';
import classes from './Backlog.module.css';
import ProfileCard from './ProfileCard';
import {CircleOutlined,Add,MoreHoriz,DonutSmallOutlined,CheckCircle,Cancel} from '@mui/icons-material';

const Backlog = (props) => {
  const item = props.items.tickets.filter((item)=> item.status === props.name);
  console.log(item);
  return (
    <div className={classes.main}>
        <div className={classes.header}>
            <div className={classes.title}>
                {props.name==='Todo' && <CircleOutlined sx={{fontSize:14,alignSelf:'center',color:'grey'}}/>}
                {props.name==='In progress' && <DonutSmallOutlined sx={{fontSize:14,alignSelf:"center",color:'#e6e600'}}/>}
                {props.name==='Done' && <CheckCircle sx={{fontSize:14,alignSelf:"center",color:'blue'}}/>}
                {props.name==='Canceled' && <Cancel sx={{fontSize:14,alignSelf:"center",color:'grey'}}/>}
                <span className={classes.type}>{props.title}</span>
                <span className={classes.item}>{item.length}</span>
            </div>
            <div className={classes.add}>
                <Add sx={{color:'grey',alignSelf:'center',fontSize:14}}/>
                <MoreHoriz sx={{color:'grey',fontSize:14,alignSelf:'center'}}/>
            </div>
        </div>
        <div className={classes.tasks}>
            {item.map((data)=>(
                <ProfileCard key={item.userId} user={props.items.users} data={data} />
            ))}
        </div>
    </div>
  )
}

export default Backlog