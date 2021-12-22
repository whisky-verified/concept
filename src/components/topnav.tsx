import React from "react";
import config from "../env/config.json";

export const TopNav = (): React.ReactElement => {
  return (
    <div className="flex flex-row bg-black">
      <div className="flex-shrink p-2">
        <h1 className="text-6xl text-white hack-type">{config.NAME}</h1>
      </div>
    </div>
  );
};
