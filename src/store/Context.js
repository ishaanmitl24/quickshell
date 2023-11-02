import React, { createContext } from "react";

const Context = React.createContext({
    options:null,
    toggle:null,
    toggleHandler:()=>{},
    activateData:()=>{},
    activeData:null,
    ticketsData:null
})

export default Context;
