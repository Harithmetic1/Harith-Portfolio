import React from "react";
import { StateProvider } from "./src/context/BlogContext";

export const wrapRootElement = ({ element }) => {
  return <StateProvider>{element}</StateProvider>;
};
