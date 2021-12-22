import React from "react";
import config from "../env/config.json";

export const App = (): React.ReactElement => {
  return (
    <div className="flex">
      <h1 className="text-6xl hack-type">{config.NAME}</h1>
    </div>
  );
};
