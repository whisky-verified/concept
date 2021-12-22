import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

/** Generic styled HTML button alternative */
export const Button = (
  props: DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
): React.ReactElement => {
  const { className, ...restprops } = props;
  return (
    <button
      className={`bg-black border-white border-2 font-whisky rounded-sm text-white hover:bg-white hover:border-black hover:text-black   ${className}`}
      {...restprops}
    />
  );
};
