import React from "react";
import { TopNav } from "./topnav";
import { Overview } from "./overview";
import { Footer } from "./footer";

export const App = (): React.ReactElement => {
  return (
    <div className="flex flex-col h-screen">
      <TopNav />
      <Overview />
      <Footer />
    </div>
  );
};
