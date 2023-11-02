import React from "react";
import classes from "./PriorityProfile.module.css";
import { Add, MoreHoriz } from "@mui/icons-material";
import {SignalCellular0Bar,SignalCellular1Bar,SignalCellular2Bar,SignalCellular3Bar} from '@mui/icons-material';
const color_hex = ["#ff8000", "#8000ff", "#0080ff", "#ff00ff", "#df2121"];
const PriorityProfile = (props) => {
  return (
    <div className={classes.main}>
      <div className={classes.title}>   
        {props.priority===1 && <SignalCellular3Bar sx={{ color:'grey', alignSelf: "center", fontSize: 15 }}/>}
        {props.priority===2 && <SignalCellular2Bar sx={{ color:'grey', alignSelf: "center", fontSize: 15 }} />}
        {props.priority===3 && <SignalCellular1Bar sx={{ color:'grey', alignSelf: "center", fontSize: 15 }}/>}
        {props.priority===4 && <SignalCellular0Bar sx={{ color:'grey', alignSelf: "center", fontSize: 15 }}/>}
        {props.priority===0 && <span className={classes.type}>No Priority</span>}
        {props.priority===1 && <span className={classes.type}>Urgent</span>}
        {props.priority===2 && <span className={classes.type}>High</span>}
        {props.priority===3 && <span className={classes.type}>Medium</span>}
        {props.priority===4 && <span className={classes.type}>Low</span>}
        <span className={classes.item}>{props.length}</span>
      </div>
      <div className={classes.add}>
        <Add sx={{ color: "grey", alignSelf: "center", fontSize: 14 }} />
        <MoreHoriz sx={{ color: "grey", fontSize: 14, alignSelf: "center" }} />
      </div>
    </div>
  );
};

export default PriorityProfile;
