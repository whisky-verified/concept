import React from "react";
import config from "../env/config.json";

export const App = (): React.ReactElement => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-row">
        <h1 className="flex-shrink text-6xl hack-type">{config.NAME}</h1>
      </div>
    </div>
  );
};
