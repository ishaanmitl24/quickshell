import React from "react";
import Backlog from "./Backlog";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../store/https";
const Main = () => {
  const {data} = useQuery({
    queryKey:['data'],
    queryFn:fetchData
  });
  return (
    <div>
      {data && (
        <div className="body">
          <Backlog title="Backlog" name="Backlog" items={data} />
          <Backlog title="Todo" name="Todo" items={data} />
          <Backlog
            title="In Progress"
            name="In progress"
            items={data}
          />
          <Backlog title="Done" name="Done" items={data} />
          <Backlog title="Canceled" name="Canceled" items={data} />
        </div>
      )}
    </div>
  );
};

export default Main;
