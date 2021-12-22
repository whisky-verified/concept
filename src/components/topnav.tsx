import React, { useCallback } from "react";
import { useRouter } from "next/router";
import { Button } from "./elements/button";
import config from "../env/config.json";

export const TopNav = (): React.ReactElement => {
  const router = useRouter();

  const githubClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      router.push("https://github.com/whisky-verified/concept");
    },
    [router]
  );

  return (
    <div className="flex flex-row bg-black">
      <div className="m-2">
        <h1 className="text-6xl text-white hack-type">{config.NAME}</h1>
      </div>
      <div className="flex-grow" />
      <Button onClick={githubClick} className="m-2 p-2">
        github
      </Button>
    </div>
  );
};
