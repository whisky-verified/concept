import React from "react";
import textText from "../env/testText";

export const Overview = (): React.ReactElement => {
  return (
    <div className="flex flex-grow min-h-0 bg-gray-200 p-2">
      <div className="flex-1 overflow-y-auto">
        <h2>Steps</h2>
        <ul>
          <li>Deploy to IPFS</li>
          <li>Demonstrate virtual prototype</li>
          <li>
            Build verifiable chain of operations to track whiskey material
          </li>
        </ul>
        <h2>Text Text</h2>
        <p>{textText}</p>
      </div>
    </div>
  );
};
