import React, { useCallback } from "react";
import config from "../env/config.json";

export const TopNav = (): React.ReactElement => {
  return (
    <div className="flex flex-row bg-black">
      <div className="m-2">
        <h1 className="text-white hack-type">{config.NAME}</h1>
      </div>
    </div>
  );
};
