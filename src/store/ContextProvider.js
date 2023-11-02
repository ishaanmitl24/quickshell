import React,{useEffect, useState} from "react";
import Context from "./Context";
import { fetchData } from "./https";
import { useQuery } from "@tanstack/react-query";
const DATA = [
    { id: "id1", head:'Grouping',title: "Display" },
    { id: "id2",head:'Grouping', title: "User" },
    { id: "id3",head:'Ordering' ,title: "Priority" },
  ];
const ContextProvider = ({ children }) => {
  const [toggle, setToggle] = useState(false);
  const [activeData, setActiveData] = useState("Display");
  const newData = DATA.filter((item)=> item.title !== activeData);
  const {data:ticketsData} = useQuery({
    queryKey:['data'],
    queryFn:fetchData
  });

  const toggleHandler = (event) => {
    setToggle((prev) => !prev);
  };
  const activateData = (data)=>{
    setActiveData(data);
  }
  const data={
    options:newData,
    toggleHandler:toggleHandler,
    toggle:toggle,
    activateData:activateData,
    activeData:activeData,
  }
  return <Context.Provider value={data}>{children}</Context.Provider>;
};

export default ContextProvider;
