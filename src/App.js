import React, { useContext } from "react";
import Option from "./components/Option";
import ContextProvider from "./store/ContextProvider";
import All from "./components/All";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
function App() {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      <ContextProvider>
        <div >
          <Option />
          <All/>
        </div>
      </ContextProvider>
    </QueryClientProvider>
  );
}

export default App;
