import React, { useContext, useState } from "react";
import { Menu,ArrowBackIos } from "@mui/icons-material";
import classes from "./Option.module.css";
import Context from "../store/Context";
import OptionItem from "./OptionItem";
const Option = () => {
  const ctx = useContext(Context);
  let setclass = ctx.toggle
    ? `${classes.dropdown} ${classes.opacity}`
    : `${classes.dropdown} ${classes.hide}`;
 
  return (
      <div className={classes.main}>
        <button onClick={ctx.toggleHandler} className={classes.button}>
          <Menu sx={{ fontSize: 16, alignSelf: "center" }} />
          <span>{ctx.activeData}</span>
          <ArrowBackIos
            sx={{
              fontSize: 10,
              transform: "rotate(270deg)",
              alignSelf: "flex-start",
            }}
          />
        </button>
        <div className={setclass}>
          {ctx.options.map((item) => (
           <OptionItem key={item.id} item={item}/>
          ))}
        </div>
      </div>
  );
};

export default Option;
