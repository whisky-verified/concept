import React from "react";
import { Overview } from "./overview";
import { TopNav } from "./topnav";

export const App = (): React.ReactElement => {
  return (
    <div className="flex flex-col h-screen">
      <TopNav />
      <Overview />
    </div>
  );
};
