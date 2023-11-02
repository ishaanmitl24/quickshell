import React from "react";
import { Add, MoreHoriz } from "@mui/icons-material";
import classes from "./UserProfile.module.css";
const color_hex = ["#ff8000", "#8000ff", "#0080ff", "#ff00ff", "#df2121"];
const UserProfile = (props) => {
  const profileNameGenerator = () => {
    return props.user.name
      .split(" ")
      .map((word) => word.charAt(0))
      .join("")
      .toUpperCase();
  };
  const newClass =
    profileNameGenerator().length === 2
      ? `${classes.avataar} ${classes.nopad}`
      : `${classes.avataar} ${classes.pad}`;
  return (
    <div className={classes.main}>
      <div className={classes.title}>
        <div className={classes.avataarMain}>
          <span
            style={{
              backgroundColor: `${color_hex[Math.floor(Math.random() * 5)]}`,
            }}
            className={newClass}
          >
            {profileNameGenerator()}
          </span>
          <span
            style={{
              backgroundColor: `${props.user.available ? "#00ff00" : "grey"}`,
            }}
            className={classes.status}
          ></span>
        </div>
        <span className={classes.type}>{props.user["name"]}</span>
        <span className={classes.item}>{props.length}</span>
      </div>
      <div className={classes.add}>
        <Add sx={{ color: "grey", alignSelf: "center", fontSize: 14 }} />
        <MoreHoriz sx={{ color: "grey", fontSize: 14, alignSelf: "center" }} />
      </div>
    </div>
  );
};

export default UserProfile;
