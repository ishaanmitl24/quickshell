import React, { useContext } from "react";
import classes from "./ProfileCard.module.css";
import { SignalCellularAltOutlined,AutoMode,CircleOutlined,DonutSmallOutlined,CheckCircle,Cancel } from "@mui/icons-material";
import Context from "../store/Context";

const color_hex=['#ff8000','#8000ff','#0080ff','#ff00ff','#df2121']
const ProfileCard = (props) => {
  let check;
  const ctx = useContext(Context);
  const profileNameGenerator=()=>{
    let name ;
    props.user.forEach((element) => {
      if (element.id === props.data.userId) {
        name = element.name;
        check=element.available;
      }
    });
    return name.split(" ").map(word => word.charAt(0)).join("").toUpperCase();
  }
  const newClass =  profileNameGenerator().length === 2 ? `${classes.avataar} ${classes.nopad}` : `${classes.avataar} ${classes.pad}`;
  return (
    <div className={classes.main}>
      <div className={classes.top}>
        <span className={classes.cam}>{props.data.id}</span>
        <div className={classes.avataarMain}>
        {ctx.activeData!=='User' && <span style={{backgroundColor:`${color_hex[Math.floor(Math.random() * 5)]}`}}  className={newClass}>{profileNameGenerator()}</span>}
        {ctx.activeData!=='User' && <span style={{backgroundColor:`${check ? '#00ff00' : 'grey'}`}} className={classes.status}></span>}
        </div>
      </div>
      <span className={classes.task}>
      {(ctx.activeData!=='Display' && props.data.status==='Todo') ? <span><CircleOutlined sx={{fontSize:14,alignSelf:'center',color:'grey',alignSelf:'flex-start'}}/></span> : <></>}
      {(ctx.activeData!=='Display' && props.data.status==='In progress') ? <span><DonutSmallOutlined sx={{fontSize:14,alignSelf:"center",color:'#e6e600',alignSelf:'flex-start'}}/></span> : <></>} 
      {(ctx.activeData!=='Display' && props.data.status==='Done') ? <span><CheckCircle sx={{fontSize:14,alignSelf:"center",color:'blue',alignSelf:'flex-start'}}/></span> : <></>}
      { (ctx.activeData!=='Display' && props.data.status==='Canceled') ? <span><Cancel sx={{fontSize:14,alignSelf:"center",color:'grey',alignSelf:'flex-start'}}/></span> : <></>}       
       <span className={classes.newtext}>{props.data.title}</span>
      </span>
      <div className={classes.footer}>
        <div className={classes.icons}>
          <SignalCellularAltOutlined sx={{fontSize:14,alignSelf:'center'}}/>
        </div>
        <div className={classes.request}>
            <span className={classes.circle}></span>
            <span className={classes.text}>{props.data.tag[0]}</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
