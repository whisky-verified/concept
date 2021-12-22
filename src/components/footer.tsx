import React, { useCallback } from "react";
import { useRouter } from "next/router";
import { Button } from "./elements/button";
import config from "../env/config.json";

export const Footer = (): React.ReactElement => {
  const router = useRouter();

  const fleekClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      router.push("https://fleek.co");
    },
    [router]
  );

  const githubClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      router.push("https://github.com/whisky-verified/concept");
    },
    [router]
  );

  return (
    <div className="flex flex-row bg-black items-center">
      <div className="m-2">
        <h2 className="text-white">{config.DESCRIPTION}</h2>
      </div>
      <div className="flex-grow" />
      <Button onClick={fleekClick} className="m-2 p-2">
        built with fleek
      </Button>
      <Button onClick={githubClick} className="m-2 p-2">
        github
      </Button>
    </div>
  );
};
