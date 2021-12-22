import React from "react";

export const Overview = (): React.ReactElement => {
  return (
    <div className="flex-grow bg-gray-200 p-2">
      <h2>Steps</h2>
      <ul>
        <li>Deploy to IPFS</li>
        <li>Demonstrate virtual prototype</li>
        <li>Build verifiable chain of operations to track whiskey material</li>
      </ul>
    </div>
  );
};
