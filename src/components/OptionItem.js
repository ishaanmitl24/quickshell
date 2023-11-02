import React, { useContext } from "react";
import { ArrowBackIos } from "@mui/icons-material";
import classes from './OptionItem.module.css';
import Context from "../store/Context";
const OptionItem = (props) => {
  const ctx = useContext(Context);
  const optionHandler =(event)=>{
    ctx.activateData(props.item.title);
  }
  return (
    <div key={props.item.id} className={classes.item}>
      <span>{props.item.head}</span>
      <button onClick={optionHandler} className={classes.buttonItem}>
        <span>{props.item.title}</span>
        <ArrowBackIos
          sx={{
            fontSize: 10,
            transform: "rotate(270deg)",
            alignSelf: "flex-start",
          }}
        />
      </button>
    </div>
  );
};

export default OptionItem;
