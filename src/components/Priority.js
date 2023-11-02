import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../store/https";
import PriorityItem from "./PriorityItem";
const Priority = () => {
  const { data } = useQuery({
    queryKey: ["data"],
    queryFn: fetchData,
  });
  return <div className="body">
    {[0,1,2,3,4].map((newdata)=>(
        <PriorityItem key={newdata} priority={newdata} data={data} />
    ))}
  </div>;
};

export default Priority;
